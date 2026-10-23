// cart.js — вся логика корзины: добавление, удаление, подсчёт суммы,
// открытие/закрытие боковой панели. Данные хранятся в localStorage браузера.

const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');
const cartCountEl = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');

// Загружаем корзину из localStorage при старте (или пустой массив, если её ещё нет)
let cart = JSON.parse(localStorage.getItem('beastfuel_cart')) || [];

// ---------- Сохранение в localStorage ----------
function saveCart() {
  localStorage.setItem('beastfuel_cart', JSON.stringify(cart));
}

// ---------- Добавление товара ----------
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  renderCart();
  openCart(); // сразу открываем корзину, чтобы пользователь увидел, что товар добавился
}

// ---------- Изменение количества ----------
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  renderCart();
}

// ---------- Удаление товара ----------
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}

// ---------- Рендер содержимого корзины ----------
function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p style="color:var(--text-muted); text-align:center; margin-top:40px;">${t('cart_empty')}</p>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" class="cart-item__img">
        <div>
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__qty">
            <button data-action="minus" data-id="${item.id}">−</button>
            <span>${item.qty}</span>
            <button data-action="plus" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-action="remove" data-id="${item.id}">✕</button>
      </div>
    `).join('');
  }

  // Считаем итоговую сумму
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = total.toLocaleString('ru-RU');

  // Считаем общее количество товаров для бейджа на иконке корзины
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = count;

  // Навешиваем обработчики на кнопки +/−/✕ внутри только что отрисованных карточек
  cartItemsEl.querySelectorAll('button').forEach(btn => {
    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;
    btn.addEventListener('click', () => {
      if (action === 'plus') changeQty(id, 1);
      if (action === 'minus') changeQty(id, -1);
      if (action === 'remove') removeFromCart(id);
    });
  });
}

// ---------- Открытие / закрытие панели корзины ----------
function openCart() {
  cartDrawer.classList.add('open');
  overlay.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  overlay.classList.remove('open');
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);

// ---------- Оформление заказа ----------
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Корзина пуста — сначала добавьте товары.');
    return;
  }

  const lines = cart.map(i => `• ${i.name} — ${i.qty} шт. (${(i.price * i.qty).toLocaleString('ru-RU')} сум)`);
  const orderText =
    'Здравствуйте! Хочу оформить заказ:\n\n' +
    lines.join('\n') +
    `\n\nИтого: ${cartTotalEl.textContent} сум`;

  const encodedText = encodeURIComponent(orderText);
  const telegramUsername = 'beastfuel_uz';

  window.open(`https://t.me/${telegramUsername}?text=${encodedText}`, '_blank');

  closeCart();
  const successModal = document.getElementById('successModal');
  if (successModal) successModal.classList.add('open');
});

document.getElementById('successClose')?.addEventListener('click', () => {
  document.getElementById('successModal').classList.remove('open');
});

// ---------- Запуск при загрузке страницы ----------
renderCart();