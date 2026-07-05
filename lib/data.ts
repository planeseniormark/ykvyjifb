export type BonusType =
  | "freebet"
  | "deposit"
  | "no-deposit"
  | "cashback"
  | "insurance"
  | "express";

export interface Bonus {
  id: string;
  bookmaker: string; // bookmaker slug
  title: string;
  description: string;
  code: string;
  type: BonusType;
  amount: string;
  recommended?: boolean;
  validUntil: string; // human readable
  terms: string;
}

export interface Bookmaker {
  slug: string;
  name: string;
  color: string; // brand color for the logo tile
  short: string; // short label for the logo tile
  rating: number; // 0..5
  founded: number;
  license: string;
  categories: string[]; // category slugs
  about: string;
  siteLabel: string;
}

export interface Category {
  slug: string;
  title: string;
  emoji: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  gradient: string; // tailwind gradient classes for the cover
  body: string[];
}

export const categories: Category[] = [
  {
    slug: "freebet",
    title: "Фрибеты",
    emoji: "🎁",
    description: "Бесплатные ставки за регистрацию и активность",
  },
  {
    slug: "deposit",
    title: "Бонус на депозит",
    emoji: "💰",
    description: "Удвоение и увеличение первого пополнения",
  },
  {
    slug: "no-deposit",
    title: "Без депозита",
    emoji: "✨",
    description: "Бонусы, которые не требуют пополнения счёта",
  },
  {
    slug: "cashback",
    title: "Кэшбэк",
    emoji: "↩️",
    description: "Возврат части проигранных ставок",
  },
  {
    slug: "insurance",
    title: "Страховка ставки",
    emoji: "🛡️",
    description: "Возврат ставки, если прогноз не сыграл",
  },
  {
    slug: "express",
    title: "Экспресс дня",
    emoji: "📈",
    description: "Повышенные коэффициенты на экспрессы",
  },
  {
    slug: "cyber",
    title: "Киберспорт",
    emoji: "🎮",
    description: "Бонусы и линии на Dota 2, CS2 и другие дисциплины",
  },
  {
    slug: "mobile",
    title: "Мобильные приложения",
    emoji: "📱",
    description: "Бонусы за установку приложения для iOS и Android",
  },
];

export const bonusTypeLabel: Record<BonusType, string> = {
  freebet: "Фрибет",
  deposit: "Бонус на депозит",
  "no-deposit": "Без депозита",
  cashback: "Кэшбэк",
  insurance: "Страховка",
  express: "Экспресс",
};

export const bookmakers: Bookmaker[] = [
  {
    slug: "fonbet",
    name: "Фонбет",
    color: "#0b4da2",
    short: "Ф",
    rating: 4.8,
    founded: 1994,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "deposit", "cyber", "mobile", "express"],
    about:
      "Одна из старейших и самых крупных легальных букмекерских контор России с широкой линией и развитым мобильным приложением.",
    siteLabel: "fon.bet",
  },
  {
    slug: "liga-stavok",
    name: "Лига Ставок",
    color: "#0a2540",
    short: "ЛС",
    rating: 4.6,
    founded: 2008,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "deposit", "insurance", "mobile"],
    about:
      "Официальный букмекер многих спортивных лиг России, известен щедрыми фрибетами за регистрацию и офлайн-сетью клубов.",
    siteLabel: "ligastavok.ru",
  },
  {
    slug: "winline",
    name: "Winline",
    color: "#e2231a",
    short: "W",
    rating: 4.7,
    founded: 2009,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "deposit", "cashback", "cyber", "mobile"],
    about:
      "Технологичная БК с сильным направлением по киберспорту, удобным приложением и регулярными бонусными акциями.",
    siteLabel: "winline.ru",
  },
  {
    slug: "betcity",
    name: "БЕТСИТИ",
    color: "#f57c00",
    short: "Б",
    rating: 4.4,
    founded: 2003,
    license: "ЕРАИ / ФНС России",
    categories: ["deposit", "insurance", "express"],
    about:
      "Букмекер с большим количеством пунктов приёма ставок и стабильной росписью по популярным видам спорта.",
    siteLabel: "betcity.ru",
  },
  {
    slug: "pari",
    name: "PARI",
    color: "#1db954",
    short: "P",
    rating: 4.5,
    founded: 2021,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "deposit", "cyber", "mobile"],
    about:
      "Современный бренд с быстрым выводом средств, широкой линией и акцентом на удобство мобильных ставок.",
    siteLabel: "pari.ru",
  },
  {
    slug: "leon",
    name: "Леон",
    color: "#c8102e",
    short: "Л",
    rating: 4.3,
    founded: 2007,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "deposit", "express", "mobile"],
    about:
      "Букмекерская контора с высокими коэффициентами на топовые события и понятным интерфейсом.",
    siteLabel: "leon.ru",
  },
  {
    slug: "olimpbet",
    name: "Олимпбет",
    color: "#00a651",
    short: "О",
    rating: 4.4,
    founded: 2012,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "deposit", "cashback", "mobile"],
    about:
      "БК с обширной линией по футболу и хоккею, частыми акциями и программой лояльности.",
    siteLabel: "olimp.bet",
  },
  {
    slug: "betboom",
    name: "BetBoom",
    color: "#ff5a00",
    short: "BB",
    rating: 4.2,
    founded: 2010,
    license: "ЕРАИ / ФНС России",
    categories: ["deposit", "cyber", "express"],
    about:
      "Активный спонсор киберспортивных турниров с яркими промо и повышенными коэффициентами.",
    siteLabel: "betboom.ru",
  },
  {
    slug: "marathonbet",
    name: "Марафон",
    color: "#0f5c2e",
    short: "М",
    rating: 4.1,
    founded: 1997,
    license: "ЕРАИ / ФНС России",
    categories: ["deposit", "insurance"],
    about:
      "Одна из старейших БК с большой глубиной линии и высокими лимитами на ставки.",
    siteLabel: "marathonbet.ru",
  },
  {
    slug: "baltbet",
    name: "Балтбет",
    color: "#004a99",
    short: "БТ",
    rating: 4.0,
    founded: 2003,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "express"],
    about:
      "Букмекер с развитой сетью клубов, ежедневными экспрессами дня и понятными бонусами.",
    siteLabel: "baltbet.ru",
  },
  {
    slug: "tennisi",
    name: "Тенниси",
    color: "#111827",
    short: "Т",
    rating: 4.0,
    founded: 1999,
    license: "ЕРАИ / ФНС России",
    categories: ["deposit", "insurance"],
    about:
      "Контора с высокими коэффициентами и лояльным отношением к успешным игрокам.",
    siteLabel: "tennisi.bet",
  },
  {
    slug: "astrabet",
    name: "Astrabet",
    color: "#6d28d9",
    short: "A",
    rating: 3.9,
    founded: 2021,
    license: "ЕРАИ / ФНС России",
    categories: ["freebet", "no-deposit", "mobile"],
    about:
      "Молодой бренд с бездепозитными бонусами для новых игроков и удобным приложением.",
    siteLabel: "astrabet.ru",
  },
];

export const bonuses: Bonus[] = [
  {
    id: "fonbet-freebet",
    bookmaker: "fonbet",
    title: "Фрибет до 3 000 ₽ новым игрокам за регистрацию",
    description:
      "Зарегистрируйся, подтверди аккаунт и получи бесплатную ставку до 3 000 ₽ без первого депозита.",
    code: "FRIBET3000",
    type: "freebet",
    amount: "до 3 000 ₽",
    recommended: true,
    validUntil: "31 декабря 2025",
    terms:
      "Фрибет начисляется после идентификации аккаунта. Отыгрыш выигрыша с фрибета — одиночная или экспресс-ставка с коэффициентом от 1.5. Только для игроков 18+.",
  },
  {
    id: "liga-freebet",
    bookmaker: "liga-stavok",
    title: "Приветственный фрибет 3 000 ₽ за первую ставку",
    description:
      "Сделай первую ставку от 100 ₽ и получи бесплатную ставку 3 000 ₽ на любое событие линии.",
    code: "LIGA3000",
    type: "freebet",
    amount: "3 000 ₽",
    recommended: true,
    validUntil: "31 декабря 2025",
    terms:
      "Бонус доступен новым игрокам после первой ставки. Срок использования фрибета — 7 дней. 18+.",
  },
  {
    id: "winline-freebet",
    bookmaker: "winline",
    title: "Фрибеты до 20 000 ₽ по бонусной программе",
    description:
      "Получай серию фрибетов за выполнение простых заданий в первые дни после регистрации.",
    code: "WINFRIBET",
    type: "freebet",
    amount: "до 20 000 ₽",
    recommended: true,
    validUntil: "31 декабря 2025",
    terms:
      "Фрибеты начисляются поэтапно за выполнение условий акции. Подробности — на сайте букмекера. 18+.",
  },
  {
    id: "winline-cyber",
    bookmaker: "winline",
    title: "Кэшбэк 10% на ставки по киберспорту",
    description:
      "Возвращаем часть проигранных ставок на матчи по Dota 2 и CS2 каждую неделю.",
    code: "CYBERBACK",
    type: "cashback",
    amount: "10%",
    validUntil: "31 декабря 2025",
    terms:
      "Кэшбэк рассчитывается по итогам недели и начисляется бонусными рублями. 18+.",
  },
  {
    id: "pari-deposit",
    bookmaker: "pari",
    title: "Бонус 100% на первый депозит до 15 000 ₽",
    description:
      "Пополни счёт и удвой сумму пополнения бонусными средствами до 15 000 ₽.",
    code: "PARI100",
    type: "deposit",
    amount: "100% до 15 000 ₽",
    recommended: true,
    validUntil: "31 декабря 2025",
    terms:
      "Бонус отыгрывается ставками с коэффициентом от 1.8. Минимальный депозит — 100 ₽. 18+.",
  },
  {
    id: "leon-freebet",
    bookmaker: "leon",
    title: "Фрибет 3 000 ₽ + повышенные коэффициенты",
    description:
      "Бесплатная ставка новым игрокам и повышенные котировки на топовые матчи выходных.",
    code: "LEONBONUS",
    type: "freebet",
    amount: "3 000 ₽",
    validUntil: "31 декабря 2025",
    terms:
      "Фрибет активируется после верификации. Повышенные коэффициенты — по расписанию акций. 18+.",
  },
  {
    id: "olimpbet-cashback",
    bookmaker: "olimpbet",
    title: "Еженедельный кэшбэк до 7% на все ставки",
    description:
      "Получай возврат части ставок каждую неделю независимо от результата.",
    code: "OLIMPBACK",
    type: "cashback",
    amount: "до 7%",
    validUntil: "31 декабря 2025",
    terms:
      "Размер кэшбэка зависит от суммы ставок за неделю. Начисляется реальными средствами. 18+.",
  },
  {
    id: "betboom-express",
    bookmaker: "betboom",
    title: "Экспресс дня: +15% к выигрышу",
    description:
      "Собери экспресс из событий дня и получи прибавку 15% к чистому выигрышу.",
    code: "BOOMEXPRESS",
    type: "express",
    amount: "+15%",
    validUntil: "31 декабря 2025",
    terms:
      "Прибавка начисляется при экспрессе от 3 событий с коэффициентом от 1.4 каждое. 18+.",
  },
  {
    id: "betcity-insurance",
    bookmaker: "betcity",
    title: "Страховка первой ставки до 5 000 ₽",
    description:
      "Не сыграла первая ставка? Вернём её сумму фрибетом до 5 000 ₽.",
    code: "CITYSAFE",
    type: "insurance",
    amount: "до 5 000 ₽",
    validUntil: "31 декабря 2025",
    terms:
      "Страховка распространяется на первую одиночную ставку новых игроков. 18+.",
  },
  {
    id: "astrabet-nodep",
    bookmaker: "astrabet",
    title: "Бездепозитный бонус 500 ₽ за регистрацию",
    description:
      "Получи 500 ₽ на счёт сразу после регистрации — без пополнения.",
    code: "ASTRA500",
    type: "no-deposit",
    amount: "500 ₽",
    recommended: true,
    validUntil: "31 декабря 2025",
    terms:
      "Бонус доступен после подтверждения номера телефона. Отыгрыш — x3 по ставкам от 1.5. 18+.",
  },
  {
    id: "marathonbet-deposit",
    bookmaker: "marathonbet",
    title: "Бонус 100% на депозит до 10 000 ₽",
    description:
      "Удвой первое пополнение и получай дополнительные средства на ставки.",
    code: "MARA100",
    type: "deposit",
    amount: "100% до 10 000 ₽",
    validUntil: "31 декабря 2025",
    terms:
      "Отыгрыш бонуса ставками с коэффициентом от 1.7. 18+.",
  },
  {
    id: "baltbet-express",
    bookmaker: "baltbet",
    title: "Ежедневный экспресс дня с бонусом +12%",
    description:
      "Ставь на подобранный экспресс дня и получай прибавку к выигрышу.",
    code: "BALTDAY",
    type: "express",
    amount: "+12%",
    validUntil: "31 декабря 2025",
    terms:
      "Прибавка начисляется при выигрыше экспресса дня. 18+.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "kak-vybrat-bukmekera",
    title: "Как выбрать надёжную букмекерскую контору в 2025 году",
    excerpt:
      "Разбираем ключевые критерии: лицензия ЕРАИ, скорость выплат, линия, приложение и служба поддержки.",
    date: "5 июля 2025",
    tag: "Гид",
    gradient: "from-brand to-brand-purple",
    body: [
      "Выбор букмекера — это первый и самый важный шаг для комфортных ставок. В России легально работают только конторы, вступившие в ЕРАИ (Единый регулятор азартных игр) и получившие лицензию. Игра у нелегальных операторов небезопасна и запрещена.",
      "Обращайте внимание на скорость и способы вывода средств, глубину линии по вашим любимым видам спорта, качество мобильного приложения и работу службы поддержки. Не менее важны прозрачные условия бонусов — читайте правила отыгрыша до регистрации.",
      "Фрибетчик собирает только легальные БК России и их актуальные предложения, чтобы вы могли сравнить условия в одном месте и выбрать оптимальный вариант.",
    ],
  },
  {
    slug: "chto-takoe-fribet",
    title: "Что такое фрибет и как его правильно отыграть",
    excerpt:
      "Объясняем, чем фрибет отличается от бонуса на депозит и как не потерять бесплатную ставку.",
    date: "28 июня 2025",
    tag: "Обучение",
    gradient: "from-brand-purple to-ink",
    body: [
      "Фрибет — это бесплатная ставка, которую букмекер дарит игроку. Главное отличие от денежного бонуса в том, что при выигрыше фрибета на счёт зачисляется только чистая прибыль без суммы самой ставки.",
      "Чтобы фрибет принёс максимум пользы, выбирайте события с коэффициентом, который соответствует условиям акции (обычно от 1.5 до 3.0). Слишком низкий коэффициент даёт маленькую прибыль, слишком высокий снижает вероятность выигрыша.",
      "Всегда проверяйте срок действия фрибета — часто он сгорает через несколько дней после начисления.",
    ],
  },
  {
    slug: "otvetstvennaya-igra",
    title: "Ответственная игра: 7 правил, которые уберегут ваш банк",
    excerpt:
      "Ставки должны оставаться развлечением. Рассказываем, как контролировать бюджет и эмоции.",
    date: "20 июня 2025",
    tag: "Безопасность",
    gradient: "from-ink to-brand-dark",
    body: [
      "Ставки на спорт — это развлечение, а не способ заработка. Установите лимит на депозит и никогда не пополняйте счёт заёмными деньгами.",
      "Не пытайтесь отыграться после проигрыша — это самая частая ошибка, которая приводит к потере банка. Делайте паузы и не ставьте на эмоциях.",
      "Если игра перестаёт приносить удовольствие, воспользуйтесь инструментами самоограничения, которые предоставляют легальные БК, или обратитесь за помощью. Азартные игры доступны только лицам старше 18 лет.",
    ],
  },
  {
    slug: "bonusy-na-kibersport",
    title: "Лучшие бонусы на киберспорт: где ставить на Dota 2 и CS2",
    excerpt:
      "Сравниваем фрибеты и кэшбэк на киберспортивные дисциплины у топовых букмекеров.",
    date: "12 июня 2025",
    tag: "Киберспорт",
    gradient: "from-brand to-ink",
    body: [
      "Киберспорт стал одним из самых популярных направлений для ставок. Букмекеры активно спонсируют турниры и предлагают специальные бонусы на матчи по Dota 2, CS2, Valorant и League of Legends.",
      "Winline и BetBoom предлагают одни из лучших условий по киберспорту — от кэшбэка на проигранные ставки до повышенных коэффициентов на топовые матчи.",
      "Перед ставкой изучите форму команд и составы — в киберспорте замены игроков сильно влияют на исход.",
    ],
  },
];

// Helpers
export const getBookmaker = (slug: string) =>
  bookmakers.find((b) => b.slug === slug);

export const getBonusesByBookmaker = (slug: string) =>
  bonuses.filter((b) => b.bookmaker === slug);

export const getBookmakersByCategory = (cat: string) =>
  bookmakers.filter((b) => b.categories.includes(cat));

export const getBonus = (id: string) => bonuses.find((b) => b.id === id);

export const getPost = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
