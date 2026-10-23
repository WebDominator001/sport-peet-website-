// product-page.js — читает id товара из адреса страницы (?id=1)
// и заполняет карточку товара на product.html

(function () {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    // Если товар не найден (например, открыли страницу без ?id=) — просто уходим в каталог
    document.querySelector('.product-page').innerHTML =
      '<div class="container"><p>Товар не найден. <a href="catalog.html">Вернуться в каталог</a></p></div>';
    return;
  }

  let qty = 1;

  function render() {
    document.getElementById('pdImg').src = product.img;
    document.getElementById('pdImg').alt = product.name;
    document.getElementById('pdCategory').textContent = categoryName(product.category);
    document.getElementById('pdName').textContent = product.name;
    document.getElementById('pdDesc').textContent = product.desc || '';
    document.getElementById('pdPrice').textContent = formatPrice(product.price) + ' ' + t('cart_currency');
    document.getElementById('pdOldPrice').textContent = product.oldPrice ? formatPrice(product.oldPrice) + ' ' + t('cart_currency') : '';
    document.getElementById('pdQtyValue').textContent = qty;
    document.getElementById('pdBreadcrumbName').textContent = product.name;
    document.title = product.name + ' — BEAST FUEL';

    const badge = document.getElementById('pdBadge');
    if (product.badge) {
      badge.textContent = product.badge;
      badge.style.display = 'inline-block';
    }

    // Похожие товары — из той же категории, кроме самого товара
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    const relatedGrid = document.getElementById('relatedGrid');
    if (relatedGrid && typeof renderProducts === 'function') {
      // Временно подменяем catalogGrid, чтобы переиспользовать функцию renderProducts из catalog.js
      const original = catalogGrid.innerHTML;
      renderProducts(related);
      relatedGrid.innerHTML = catalogGrid.innerHTML;
      catalogGrid.innerHTML = original;
    }
  }

  document.getElementById('pdQtyMinus').addEventListener('click', () => {
    if (qty > 1) qty--;
    document.getElementById('pdQtyValue').textContent = qty;
  });

  document.getElementById('pdQtyPlus').addEventListener('click', () => {
    qty++;
    document.getElementById('pdQtyValue').textContent = qty;
  });

  document.getElementById('pdAddBtn').addEventListener('click', () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  });

  render();
})();