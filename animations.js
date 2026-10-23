// animations.js — переключение темы, мобильное меню, 
// и анимация появления карточек/секций при прокрутке страницы

// ---------- Переключение тёмной/светлой темы ----------
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
  const savedTheme = localStorage.getItem('beastfuel_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '☀️';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('beastfuel_theme', isLight ? 'light' : 'dark');
  });
}

// ---------- Мобильное меню (бургер) ----------
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
    burger.textContent = nav.classList.contains('mobile-open') ? '✕' : '☰';
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      burger.textContent = '☰';
    });
  });
}

// ---------- Тень у шапки при скролле ----------
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// ---------- Появление элементов при скролле ----------
// Помечаем классом .reveal все карточки и заголовки секций —
// они станут видимыми, когда попадут в область экрана


const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

function setupRevealAnimations() {
  const targets = document.querySelectorAll(
    '.category-card, .product-card, .about__card, .section-title, .review-card, .faq-item'
  );
  targets.forEach(el => {
    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
      revealObserver.observe(el);
    }
  });
}

setTimeout(setupRevealAnimations, 100);

// Делаем функцию доступной глобально, чтобы catalog.js мог вызвать её
// после рендера новых карточек (фильтры, поиск, похожие товары)
window.setupRevealAnimations = setupRevealAnimations;


function animateCounters() {
  const counters = document.querySelectorAll('.stat-item__num, .bento-card__num[data-target], .bento-card__num span[data-target]');
  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    const duration = 1500;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }
    requestAnimationFrame(update);
  });
}

const bentoSection = document.querySelector('.bento');
if (bentoSection) {
  const bentoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        bentoObserver.disconnect();
      }
    });
  }, { threshold: 0.3 });
  bentoObserver.observe(bentoSection);
} else {
  animateCounters();
}


// ---------- Подсветка активного пункта меню ----------
(function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'beastfuel.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const linkPage = link.getAttribute('href').split('#')[0]; // убираем якорь типа #categories
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
})();


// ---------- FAQ аккордеон ----------
document.querySelectorAll('.faq-item__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});


// ---------- Параллакс картинки в hero (следует за курсором) ----------
const heroVisual = document.querySelector('.hero__visual');
const heroImgEl = document.getElementById('heroImg');

if (heroVisual && heroImgEl) {
  heroVisual.addEventListener('mousemove', (e) => {
    const rect = heroVisual.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // от -0.5 до 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const moveX = x * 24; // сила смещения по горизонтали
    const moveY = y * 24; // сила смещения по вертикали

    heroImgEl.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${x * 4}deg)`;
  });

  heroVisual.addEventListener('mouseleave', () => {
    heroImgEl.style.transform = 'translate(0, 0) rotate(0deg)';
  });
}





// ---------- Скролл-прогресс бар ----------
const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  });
}





// ---------- Кастомный курсор ----------
// ---------- Кастомный курсор (с плавным следованием) ----------
const customCursor = document.getElementById('customCursor');

if (customCursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    customCursor.classList.add('visible');
  });

  document.addEventListener('mouseleave', () => {
    customCursor.classList.remove('visible');
  });

  // Плавное следование курсора за мышью через интерполяцию (эффект инерции)
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;
    customCursor.style.left = cursorX + 'px';
    customCursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Увеличиваем курсор при наведении на кликабельные элементы (делегирование —
  // работает и для карточек, которые появляются в DOM позже через catalog.js)
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .product-card, .category-card, input, select, textarea')) {
      customCursor.classList.add('hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .product-card, .category-card, input, select, textarea')) {
      customCursor.classList.remove('hover');
    }
  });
}