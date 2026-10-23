// i18n.js — словарь переводов и логика переключения языка RU/EN

const translations = {
  ru: {
    nav_catalog: "Каталог",
    nav_categories: "Категории",
    nav_about: "О нас",
    nav_contacts: "Контакты",

    hero_eyebrow: "Топливо для тех, кто не сдаётся",
    hero_title_1: "СТАНЬ",
    hero_title_accent: "ЗВЕРЕМ",
    hero_title_2: "В КАЖДОМ ПОДХОДЕ",
    hero_subtitle: "Протеин, креатин, витамины и предтреники — всё, что нужно твоим мышцам, без переплаты за бренд.",
    hero_btn_catalog: "Смотреть каталог",
    hero_btn_why: "Почему мы",

    stat_clients: "довольных клиентов",
    stat_products: "товаров в каталоге",
    stat_delivery: "часа доставка",

    section_categories: "Категории",
    section_catalog: "Каталог товаров",
    section_about: "Почему BEAST FUEL",

    filter_all: "Все",
    filter_protein: "Протеин",
    filter_creatine: "Креатин",
    filter_vitamins: "Витамины",
    filter_preworkout: "Предтреник",

    search_placeholder: "Поиск товара...",
    sort_default: "Сортировка",
    sort_price_asc: "Сначала дешевле",
    sort_price_desc: "Сначала дороже",
    sort_name_asc: "По названию А-Я",

    about_1_title: "Только сертифицированные бренды",
    about_1_text: "Работаем напрямую с поставщиками, никакого контрафакта.",
    about_2_title: "Быстрая доставка",
    about_2_text: "По Самарканду — в день заказа, по Узбекистану — 1–3 дня.",
    about_3_title: "Консультация перед покупкой",
    about_3_text: "Поможем подобрать добавки под твою цель: масса, сушка, выносливость.",

    cart_title: "Корзина",
    cart_total_label: "Итого:",
    cart_currency: "сум",
    cart_checkout: "Оформить заказ",
    cart_empty: "Корзина пуста",

    modal_add: "Добавить в корзину",

    category_unit: "товаров",
    about_eyebrow: "О бренде",
    about_page_title: "ПОЧЕМУ BEAST FUEL",
    story_eyebrow: "Наша история",
    story_title: "НЕ ПРОСТО МАГАЗИН",
    story_p1: "BEAST FUEL начался как маленький проект для тех, кто тренируется в Самарканде и устал переплачивать за раскрученные бренды. Мы работаем напрямую с поставщиками, поэтому можем держать честные цены без потери качества.",
    story_p2: "Сегодня мы предлагаем протеин, креатин, витамины и предтреники — всё, что нужно для результата, без лишнего маркетинга.",
    about_cta_title: "ГОТОВ НАЧАТЬ?",
    contacts_eyebrow: "Связь с нами",
    contacts_page_title: "КОНТАКТЫ",
    contact_phone_label: "Телефон",
    contact_telegram_label: "Telegram",
    contact_address_label: "Адрес",
    contact_address_value: "Самарканд, Узбекистан",
    contact_hours_label: "Часы работы",
    contact_hours_value: "Ежедневно, 9:00 – 21:00",
    contact_form_title: "Напишите нам",
    contact_form_name: "Имя",
    contact_form_phone: "Телефон",
    contact_form_message: "Сообщение",
    contact_form_submit: "Отправить",
    modal_details: "Подробнее →",
    related_title: "Похожие товары",
    nav_home: "Главная",
    promo_badge: "🔥 Ограниченное предложение",
    promo_title: "Скидка 15% на первый заказ",
    promo_subtitle: "Промокод применяется автоматически при оформлении через Telegram",
    reviews_title: "Отзывы клиентов",
    review_1_text: "Беру протеин уже третий месяц — вкус нормальный, растворяется хорошо, цена намного приятнее, чем в других магазинах города.",
    review_1_role: "Клиент 3 месяца",
    review_2_text: "Заказывал креатин, доставили на следующий день по Самарканду. Ребята из телеграма отвечают быстро, всё по делу.",
    review_2_role: "Постоянный клиент",
    review_3_text: "Помогли подобрать витамины под мою цель, объяснили дозировку. Видно, что разбираются, а не просто продают.",
    review_3_role: "Новый клиент",
    faq_title: "Частые вопросы",
    faq_1_q: "Как быстро приходит заказ?",
    faq_1_a: "По Самарканду доставляем в день заказа, по остальному Узбекистану — 1–3 дня в зависимости от региона.",
    faq_2_q: "Как оплатить заказ?",
    faq_2_a: "Оплата наличными курьеру при получении или переводом на карту после подтверждения заказа в Telegram.",
    faq_3_q: "Товар оригинальный?",
    faq_3_a: "Да, мы работаем напрямую с поставщиками и не продаём подделки — у каждого товара есть сертификат.",
    faq_4_q: "Можно вернуть товар?",
    faq_4_a: "Если упаковка не вскрыта — можно вернуть или обменять в течение 14 дней. Свяжитесь с нами в Telegram.",
    success_title: "Заказ отправлен!",
    success_text: "Мы открыли Telegram с готовым текстом заказа — просто нажмите «Отправить» в чате.",
    success_close: "Понятно",
    goal_eyebrow: "Персональный подбор",
    goal_title: "КАКАЯ У ТЕБЯ ЦЕЛЬ?",
    goal_subtitle: "Выбери цель — покажем то, что реально работает",
    goal_bulk: "Набор массы",
    goal_cut: "Похудение",
    goal_endurance: "Выносливость",
    marquee_1: "⚡ БЫСТРАЯ ДОСТАВКА",
    marquee_2: "✅ ОРИГИНАЛЬНЫЕ БРЕНДЫ",
    marquee_3: "💰 ЧЕСТНЫЕ ЦЕНЫ",
    marquee_4: "💬 КОНСУЛЬТАЦИЯ БЕСПЛАТНО",
    footer_tagline: "Спортивное питание и витамины в Самарканде.",
    footer_contacts_title: "Контакты",
    footer_phone_label: "Телефон",
    footer_nav_title: "Навигация",
    footer_bottom: "© 2026 BEAST FUEL. Все права защищены.",
    contact_placeholder_name: "Ваше имя",
    contact_placeholder_phone: "+998 ...",
    contact_placeholder_message: "Ваш вопрос...",
    catalog_page_title: "ВСЕ ТОВАРЫ",
    bento_title: "В ОДНОМ МЕСТЕ",
    bento_1_label: "довольных клиентов по всему Самарканду",
    bento_2_label: "товаров в каталоге",
    bento_3_label: "доставка по городу",
    bento_4_text: "Работаем напрямую с поставщиками — никакого контрафакта, только сертифицированные бренды",
    bento_5_text: "Бесплатная консультация перед покупкой в Telegram",
    bento_hours_unit: "ч",



  },
  en: {
    nav_catalog: "Catalog",
    nav_categories: "Categories",
    nav_about: "About",
    nav_contacts: "Contacts",

    hero_eyebrow: "Fuel for those who don't quit",
    hero_title_1: "BECOME A",
    hero_title_accent: "BEAST",
    hero_title_2: "IN EVERY SET",
    hero_subtitle: "Protein, creatine, vitamins and pre-workouts — everything your muscles need, without paying extra for the brand name.",
    hero_btn_catalog: "View catalog",
    hero_btn_why: "Why us",

    stat_clients: "happy clients",
    stat_products: "products in catalog",
    stat_delivery: "hour delivery",

    section_categories: "Categories",
    section_catalog: "Product Catalog",
    section_about: "Why BEAST FUEL",

    filter_all: "All",
    filter_protein: "Protein",
    filter_creatine: "Creatine",
    filter_vitamins: "Vitamins",
    filter_preworkout: "Pre-workout",

    search_placeholder: "Search products...",
    sort_default: "Sort by",
    sort_price_asc: "Price: low to high",
    sort_price_desc: "Price: high to low",
    sort_name_asc: "Name A-Z",

    about_1_title: "Only certified brands",
    about_1_text: "We work directly with suppliers — no counterfeit products.",
    about_2_title: "Fast delivery",
    about_2_text: "Same-day delivery in Samarkand, 1–3 days across Uzbekistan.",
    about_3_title: "Consultation before purchase",
    about_3_text: "We'll help you pick the right supplements for your goal: bulking, cutting, endurance.",

    cart_title: "Cart",
    cart_total_label: "Total:",
    cart_currency: "UZS",
    cart_checkout: "Checkout",
    cart_empty: "Your cart is empty",

    modal_add: "Add to cart",

    category_unit: "products",
    about_eyebrow: "About the brand",
    about_page_title: "WHY BEAST FUEL",
    story_eyebrow: "Our story",
    story_title: "NOT JUST A STORE",
    story_p1: "BEAST FUEL started as a small project for people training in Samarkand who were tired of overpaying for big brand names. We work directly with suppliers, so we can keep prices fair without losing quality.",
    story_p2: "Today we offer protein, creatine, vitamins and pre-workouts — everything you need for results, without the extra marketing.",
    about_cta_title: "READY TO START?",
    contacts_eyebrow: "Get in touch",
    contacts_page_title: "CONTACTS",
    contact_phone_label: "Phone",
    contact_telegram_label: "Telegram",
    contact_address_label: "Address",
    contact_address_value: "Samarkand, Uzbekistan",
    contact_hours_label: "Working hours",
    contact_hours_value: "Daily, 9:00 AM – 9:00 PM",
    contact_form_title: "Write to us",
    contact_form_name: "Name",
    contact_form_phone: "Phone",
    contact_form_message: "Message",
    contact_form_submit: "Send",
    modal_details: "Details →",
    related_title: "Related products",
    nav_home: "Home",
    promo_badge: "🔥 Limited offer",
    promo_title: "15% off your first order",
    promo_subtitle: "The promo code is applied automatically when you order via Telegram",
    reviews_title: "Customer reviews",
    review_1_text: "I've been buying protein for three months now — good taste, mixes well, and the price beats other stores in town.",
    review_1_role: "Customer for 3 months",
    review_2_text: "Ordered creatine, delivered the next day in Samarkand. The Telegram team replies fast and to the point.",
    review_2_role: "Regular customer",
    review_3_text: "They helped me pick vitamins for my goal and explained the dosage. You can tell they actually know the products.",
    review_3_role: "New customer",
    faq_title: "Frequently asked questions",
    faq_1_q: "How fast does the order arrive?",
    faq_1_a: "Same-day delivery in Samarkand, 1–3 days across the rest of Uzbekistan depending on the region.",
    faq_2_q: "How do I pay for my order?",
    faq_2_a: "Cash on delivery to the courier, or a card transfer after we confirm your order on Telegram.",
    faq_3_q: "Is the product original?",
    faq_3_a: "Yes, we work directly with suppliers and never sell counterfeits — every product comes with a certificate.",
    faq_4_q: "Can I return a product?",
    faq_4_a: "If the packaging is unopened, you can return or exchange it within 14 days. Contact us on Telegram.",
    success_title: "Order sent!",
    success_text: "We've opened Telegram with your order text ready — just hit «Send» in the chat.",
    success_close: "Got it",
    goal_eyebrow: "Personalized picks",
    goal_title: "WHAT'S YOUR GOAL?",
    goal_subtitle: "Pick a goal — we'll show you what actually works",
    goal_bulk: "Bulking",
    goal_cut: "Cutting",
    goal_endurance: "Endurance",
    marquee_1: "⚡ FAST DELIVERY",
    marquee_2: "✅ AUTHENTIC BRANDS",
    marquee_3: "💰 FAIR PRICES",
    marquee_4: "💬 FREE CONSULTATION",
    footer_tagline: "Sports nutrition and vitamins in Samarkand.",
    footer_contacts_title: "Contacts",
    footer_phone_label: "Phone",
    footer_nav_title: "Navigation",
    footer_bottom: "© 2026 BEAST FUEL. All rights reserved.",
    contact_placeholder_name: "Your name",
    contact_placeholder_phone: "+998 ...",
    contact_placeholder_message: "Your question...",
    catalog_page_title: "ALL PRODUCTS",
    bento_title: "ALL IN ONE PLACE",
    bento_1_label: "happy clients across Samarkand",
    bento_2_label: "products in catalog",
    bento_3_label: "delivery around the city",
    bento_4_text: "We work directly with suppliers — no counterfeits, only certified brands",
    bento_5_text: "Free consultation before you buy, on Telegram",
    bento_hours_unit: "hours",


  }
};

// Текущий язык — берём из localStorage, по умолчанию русский
let currentLang = localStorage.getItem('beastfuel_lang') || 'ru';

function t(key) {
  return translations[currentLang][key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('beastfuel_lang', lang);

  // Обновляем текстовые элементы
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Обновляем placeholder у полей ввода
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Переключаем активную кнопку языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;

  // Перерисовываем каталог и категории, чтобы обновить динамический контент
  // (эти функции определены в catalog.js, который подключён позже —
  // проверяем, что они уже существуют, на случай если i18n.js вызовется раньше)
  if (typeof filterButtons !== 'undefined' && filterButtons.length > 0 && typeof applyFilters === 'function') {
  applyFilters();
} else if (typeof catalogGrid !== 'undefined' && catalogGrid && typeof renderProducts === 'function' && typeof PRODUCTS !== 'undefined') {
  renderProducts(PRODUCTS.filter(p => [1, 3, 5].includes(p.id)));
}
  if (typeof renderCategories === 'function') renderCategories();
  if (typeof renderCart === 'function') renderCart();
}

// Обработчики кнопок переключателя языка
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
  });
});

// Применяем сохранённый язык сразу при загрузке (переведёт статичные тексты)
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});