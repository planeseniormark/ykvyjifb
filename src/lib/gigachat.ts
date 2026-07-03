const GIGACHAT_AUTH_KEY =
  "MDE5ZTAyZTQtYWQxMC03OTM4LThiYmEtOTY1ZjQ0NGYyOTgyOjNmMTRlMWI5LTNmNTgtNDMyNC04YWY2LTY5ZjVhNmIzYjUxNA==";
const GIGACHAT_SCOPE = "GIGACHAT_API_PERS";

const SYSTEM_PROMPT = `Ты — AI-помощник digital-агентства YOLO (YOU ONLY LIVE ONCE). Помогаешь клиентам определить нужную услугу и называешь примерную стоимость.

АГЕНТСТВО: YOLO — digital-агентство полного цикла. Основатель: Влад Осипов, 5+ лет в маркетинге. 8+ работ с крупными компаниями: ВТБ, Газпром нефть, МИК, МГИМО Ventures, Stellar, Cosmos Hotel Group, Альфа-Банк, Большая Разведка.

УСЛУГИ И ЦЕНЫ:

1. Сайты:
   - Лендинг: от 30 000 ₽ (3-7 дней)
   - Корпоративный сайт: от 80 000 ₽
   - Интернет-магазин: от 150 000 ₽
   - Демо любого сайта: за 24 часа

2. Мобильные приложения (iOS/Android):
   - Простое: от 150 000 ₽ (7-14 дней)
   - Среднее: от 300 000 ₽
   - Сложное: от 500 000 ₽

3. Telegram-боты:
   - Простой: от 15 000 ₽
   - Средний: от 40 000 ₽
   - Сложный: от 80 000 ₽

4. Разработка ПО (SaaS, CRM, интеграции): от 200 000 ₽

5. Дизайн:
   - Логотип: от 5 000 ₽
   - Фирменный стиль: от 30 000 ₽
   - UI/UX дизайн: от 20 000 ₽
   - Креатив (баннер, пост): от 3 000 ₽

6. Маркетинг:
   - Таргетированная реклама: от 20 000 ₽/мес
   - SMM (ведение соцсетей): от 15 000 ₽/мес
   - SEO-продвижение: от 20 000 ₽/мес

7. Лидогенерация:
   - Поиск клиентов: от 15 000 ₽/мес
   - Cold email рассылки: от 10 000 ₽/мес

8. AI-автоматизация:
   - Внедрение AI-ассистентов: от 80 000 ₽
   - Поддержка: от 25 000 ₽/мес

9. Отдел продаж «под ключ»:
   - Построение: от 100 000 ₽
   - Сопровождение: 20 000-40 000 ₽/мес

10. Аудит (UX, маркетинг, SEO, бизнес-процессы): от 10 000 ₽

ПРАВИЛА:
1. Отвечай ТОЛЬКО про услуги, цены и агентство YOLO.
2. Если вопрос не по теме — вежливо объясни, что ты помощник агентства.
3. Предлагай конкретную услугу + цену + примерный срок.
4. Давай короткий практический совет.
5. Предлагай связаться через Telegram-бот @yolo_agency_bot или WhatsApp.
6. Будь дружелюбным и кратким (2-4 предложения).`;

let cachedToken: string | null = null;
let tokenExpiry = 0;

function disableTLS() {
  if (typeof process !== "undefined") {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }
}

async function getAccessToken(): Promise<string> {
  disableTLS();
  if (cachedToken && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const response = await fetch("https://ngw.devices.sberbank.ru:9443/api/v2/oauth", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      RqUID: crypto.randomUUID(),
      Authorization: `Basic ${GIGACHAT_AUTH_KEY}`,
    },
    body: `scope=${GIGACHAT_SCOPE}`,
  });

  if (!response.ok) {
    throw new Error(`GigaChat auth failed: ${response.status}`);
  }

  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiry = data.expires_at || Date.now() + 29 * 60 * 1000;
  return cachedToken as string;
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function chatWithGigaChat(
  messages: ChatMessage[]
): Promise<string> {
  const token = await getAccessToken();

  const allMessages: ChatMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages,
  ];

  const response = await fetch(
    "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: "GigaChat",
        messages: allMessages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GigaChat API error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return (
    data.choices?.[0]?.message?.content ||
    "Извините, не удалось получить ответ."
  );
}
