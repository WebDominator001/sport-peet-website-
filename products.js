// Список всех товаров магазина BEAST FUEL
// Каждый товар — объект с полями: id, название, категория, цена, старая цена (если скидка), картинка, бейдж

const PRODUCTS = [
  {
    id: 1,
    name: "Whey Protein Gold",
    category: "protein",
    price: 320000,
    oldPrice: 380000,
    img: "assets/img/protein-1.png",
    badge: "Хит",
    desc: "Быстроусвояемый сывороточный протеин, 24г белка на порцию. Идеален после тренировки для восстановления мышц.",
    goals: ["bulk"]
  },
  {
    id: 2,
    name: "Whey Protein Chocolate",
    category: "protein",
    price: 310000,
    oldPrice: null,
    img: "assets/img/protein-2.png",
    badge: null,
    desc: "Шоколадный вкус, 22г белка на порцию, минимум сахара. Отлично растворяется, без комков.",
    goals: ["bulk", "cut"]
  },
  {
    id: 3,
    name: "Creatine Monohydrate 300g",
    category: "creatine",
    price: 150000,
    oldPrice: 180000,
    img: "assets/img/creatine-1.png",
    badge: "Скидка",
    desc: "Чистый моногидрат креатина без добавок. Повышает силовые показатели и выносливость при регулярном приёме.",
    goals: ["bulk", "endurance"]

  },
  {
    id: 4,
    name: "Creatine Capsules",
    category: "creatine",
    price: 165000,
    oldPrice: null,
    img: "assets/img/creatine-2.png",
    badge: null,
    desc: "Креатин в капсулах — удобная дозировка без необходимости отмерять порошок. Легко брать с собой в зал.",
    goals: ["bulk", "endurance"]
  },
  {
    id: 5,
    name: "Multivitamin Complex",
    category: "vitamins",
    price: 120000,
    oldPrice: null,
    img: "assets/img/vitamins-1.png",
    badge: "Новинка",
    desc: "Комплекс из 12 витаминов и минералов для поддержки иммунитета и энергии при высоких физических нагрузках.",
    goals: ["cut", "endurance"]
  },
  {
    id: 6,
    name: "Omega-3 Fish Oil",
    category: "vitamins",
    price: 95000,
    oldPrice: 110000,
    img: "assets/img/vitamins-2.png",
    badge: null,
    desc: "Рыбий жир высокой очистки, источник Омега-3. Поддерживает здоровье суставов и сердечно-сосудистой системы.",
    goals: ["cut"]
  },
  {
    id: 7,
    name: "Pre-Workout Extreme",
    category: "preworkout",
    price: 220000,
    oldPrice: null,
    img: "assets/img/preworkout-1.png",
    badge: "Хит",
    desc: "Мощный предтренировочный комплекс с кофеином и бета-аланином. Заряд энергии и фокуса на всю тренировку.",
    goals: ["endurance"]
  },
  {
    id: 8,
    name: "Pre-Workout Citrus",
    category: "preworkout",
    price: 210000,
    oldPrice: 250000,
    img: "assets/img/preworkout-2.png",
    badge: "Скидка",
    desc: "Освежающий цитрусовый вкус, умеренная доза кофеина. Хороший выбор для вечерних тренировок.",
    goals: ["endurance", "cut"]
  }
];

// Список категорий — используется для рендера блока Categories
const CATEGORIES = [
  { key: "protein", name: "Протеин", icon: "🥤" },
  { key: "creatine", name: "Креатин", icon: "💊" },
  { key: "vitamins", name: "Витамины", icon: "🍊" },
  { key: "preworkout", name: "Предтреник", icon: "⚡" }
];

