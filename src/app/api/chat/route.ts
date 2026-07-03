import { NextRequest, NextResponse } from "next/server";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const AUTH_KEY =
  "MDE5ZTAyZTQtYWQxMC03OTM4LThiYmEtOTY1ZjQ0NGYyOTgyOjNmMTRlMWI5LTNmNTgtNDMyNC04YWY2LTY5ZjVhNmIzYjUxNA==";
const SCOPE = "GIGACHAT_API_PERS";

const SYSTEM_PROMPT = `Ты — AI-ассистент digital-агентства YOLO (YOU ONLY LIVE ONCE).
Основатель агентства — Влад Осипов, 5+ лет в маркетинге, 8+ проектов для клиентов.
Услуги: сайты и веб-приложения, Telegram-боты и Mini Apps, маркетинг и продвижение, AI-автоматизация.
Отвечай кратко, дружелюбно и по делу на русском языке. Помогай посетителям выбрать услугу и предлагай оставить заявку через форму на сайте или написать в Telegram.`;

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.token;
  }
  const res = await fetch("https://ngw.devices.sberbank.ru:9443/api/v2/oauth", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
      RqUID: crypto.randomUUID(),
      Authorization: `Basic ${AUTH_KEY}`,
    },
    body: `scope=${SCOPE}`,
  });
  if (!res.ok) {
    throw new Error(`GigaChat auth failed: ${res.status}`);
  }
  const data = await res.json();
  cachedToken = { token: data.access_token, expiresAt: data.expires_at };
  return data.access_token;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!Array.isArray(messages)) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const token = await getToken();
    const res = await fetch(
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
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          temperature: 0.7,
          max_tokens: 512,
        }),
      }
    );

    if (!res.ok) {
      throw new Error(`GigaChat request failed: ${res.status}`);
    }

    const data = await res.json();
    const reply =
      data.choices?.[0]?.message?.content ??
      "Извините, не получилось ответить. Попробуйте ещё раз.";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      {
        reply:
          "Сейчас не могу ответить — напишите нам в Telegram или оставьте почту в форме ниже, и Влад свяжется с вами лично.",
      },
      { status: 200 }
    );
  }
}
