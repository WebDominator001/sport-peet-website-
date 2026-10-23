// catalog.js — рендерит категории и товары на странице,
// использует данные PRODUCTS и CATEGORIES из products.js (файл подключён раньше в HTML)

const categoriesGrid = document.getElementById('categoriesGrid');
const catalogGrid = document.getElementById('catalogGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// ---------- Рендер категорий ----------
function renderCategories() {
  if (!categoriesGrid) return;
  
  categoriesGrid.innerHTML = CATEGORIES.map(cat => {
    const count = PRODUCTS.filter(p => p.category === cat.key).length;
    return `
      <div class="category-card" data-category="${cat.key}">
        <div class="category-card__icon">${cat.icon}</div>
        <div class="category-card__name">${t('filter_' + cat.key)}</div>
        <div class="category-card__count">${count} ${t('category_unit')}</div>
      </div>
    `;
  }).join('');

  categoriesGrid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.category;
      currentCategory = key;
      applyFilters();
      setActiveFilterButton(key);
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    });
  });
}
// ---------- Рендер товаров ----------
function renderProducts(list) {
  catalogGrid.innerHTML = list.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-card__img-wrap">
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" class="product-card__img">
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${categoryName(p.category)}</div>
        <div class="product-card__name">${p.name}</div>
        <div class="product-card__price-row">
          <div>
            ${p.oldPrice ? `<span class="product-card__price-old">${formatPrice(p.oldPrice)}</span>` : ''}
            <span class="product-card__price">${formatPrice(p.price)} ${t('cart_currency')}</span>
          </div>
          <button class="product-card__add" data-id="${p.id}" aria-label="Добавить в корзину">+</button>
        </div>
      </div>
    </div>
  `).join('');

  // Кнопка "+" на каждой карточке — добавляет товар в корзину (функция из cart.js)
  // Кнопка "+" на каждой карточке — добавляет товар в корзину (функция из cart.js)
  catalogGrid.querySelectorAll('.product-card__add').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const product = PRODUCTS.find(p => p.id === id);
      addToCart(product);
    });
  });

  if (typeof window.setupRevealAnimations === 'function') {
    setTimeout(window.setupRevealAnimations, 50);
  }
}

// ---------- Фильтрация + поиск + сортировка (работают вместе) ----------
let currentCategory = 'all';

const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

function applyFilters() {
  let result = currentCategory === 'all'
    ? [...PRODUCTS]
    : PRODUCTS.filter(p => p.category === currentCategory);

const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  if (query) {
    result = result.filter(p => p.name.toLowerCase().includes(query));
  }

  const sortValue = sortSelect ? sortSelect.value : 'default';
  if (sortValue === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (sortValue === 'name-asc') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderProducts(result);
}

function setActiveFilterButton(key) {
  filterButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === key);
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.filter;
    setActiveFilterButton(currentCategory);
    applyFilters();
  });
});

if (searchInput) searchInput.addEventListener('input', applyFilters);
if (sortSelect) sortSelect.addEventListener('change', applyFilters);

// ---------- Вспомогательные функции ----------
function formatPrice(num) {
  return num.toLocaleString('ru-RU');
}

function categoryName(key) {
  return t('filter_' + key);
}

// ---------- Запуск при загрузке страницы ----------
renderCategories();
if (filterButtons.length > 0) {
  applyFilters();
} else if (catalogGrid) {
  const featured = PRODUCTS.filter(p => [1, 3, 5].includes(p.id));
  renderProducts(featured);
}

// ---------- Модалка товара ----------
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalCategory = document.getElementById('modalCategory');
const modalName = document.getElementById('modalName');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalOldPrice = document.getElementById('modalOldPrice');
const modalAddBtn = document.getElementById('modalAddBtn');

function openProductModal(product) {
  modalImg.src = product.img;
  modalImg.alt = product.name;
  modalCategory.textContent = categoryName(product.category);
  modalName.textContent = product.name;
  modalDesc.textContent = product.desc || '';
  modalPrice.textContent = formatPrice(product.price) + ' ' + t('cart_currency');
  modalOldPrice.textContent = product.oldPrice ? formatPrice(product.oldPrice) + ' ' + t('cart_currency') : '';
  modalAddBtn.onclick = () => {
    addToCart(product);
    closeProductModal();
  };
  const detailsLink = document.getElementById('modalDetailsLink');
  if (detailsLink) detailsLink.href = 'product.html?id=' + product.id;
  productModal.classList.add('open');
}

function closeProductModal() {
  productModal.classList.remove('open');
}

modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e) => {
  if (e.target === productModal) closeProductModal();
});

// Клик по карточке товара (кроме кнопки "+") открывает модалку
catalogGrid.addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (!card) return;
  if (e.target.closest('.product-card__add')) return; // клик по "+" не должен открывать модалку
  const id = Number(card.dataset.id);
  const product = PRODUCTS.find(p => p.id === id);
  if (product) openProductModal(product);
});






// ---------- Подборщик по цели (Goal Picker) ----------
const goalCards = document.querySelectorAll('.goal-card');
const goalResult = document.getElementById('goalResult');

if (goalCards.length > 0 && goalResult) {
  goalCards.forEach(card => {
    card.addEventListener('click', () => {
      const goal = card.dataset.goal;

      goalCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const matched = PRODUCTS.filter(p => p.goals && p.goals.includes(goal)).slice(0, 3);

      goalResult.innerHTML = matched.map(p => `
        <div class="product-card" data-id="${p.id}">
          <div class="product-card__img-wrap">
            ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
            <img src="${p.img}" alt="${p.name}" class="product-card__img">
          </div>
          <div class="product-card__body">
            <div class="product-card__category">${categoryName(p.category)}</div>
            <div class="product-card__name">${p.name}</div>
            <div class="product-card__price-row">
              <div>
                ${p.oldPrice ? `<span class="product-card__price-old">${formatPrice(p.oldPrice)}</span>` : ''}
                <span class="product-card__price">${formatPrice(p.price)} ${t('cart_currency')}</span>
              </div>
              <button class="product-card__add" data-id="${p.id}" aria-label="Добавить в корзину">+</button>
            </div>
          </div>
        </div>
      `).join('');

      goalResult.classList.add('open');

      // Кнопка "+" в результатах — тоже должна добавлять в корзину
      goalResult.querySelectorAll('.product-card__add').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = Number(btn.dataset.id);
          const product = PRODUCTS.find(p => p.id === id);
          addToCart(product);
        });
      });

      // Клик по карточке (не по кнопке +) открывает модалку товара
      goalResult.querySelectorAll('.product-card').forEach(el => {
        el.addEventListener('click', (e) => {
          if (e.target.closest('.product-card__add')) return;
          const id = Number(el.dataset.id);
          const product = PRODUCTS.find(p => p.id === id);
          if (product) openProductModal(product);
        });
      });

      if (typeof window.setupRevealAnimations === 'function') {
        setTimeout(window.setupRevealAnimations, 50);
      }
    });
  });
}