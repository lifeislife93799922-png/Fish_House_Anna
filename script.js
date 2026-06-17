document.addEventListener('DOMContentLoaded', () => {
  // ============================================================
  // 1. ДИНАМИЧЕСКИЙ ГРАДИЕНТ: мышь + сенсор (для телефона)
  // ============================================================
  const setCoords = (e) => {
    let clientX, clientY;

    // Если это сенсорное событие (палец на телефоне)
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      // Если это мышь
      clientX = e.clientX;
      clientY = e.clientY;
    }

    // Применяем координаты к корневому элементу (для всех секций)
    document.documentElement.style.setProperty('--mouse-x', `${clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${clientY}px`);
  };

  // Слушаем мышь (для ПК)
  document.addEventListener('mousemove', setCoords);

  // Слушаем касания (для телефона)
  document.addEventListener('touchmove', setCoords, { passive: true });

  // ============================================================
  // 2. ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
  // ============================================================
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ============================================================
  // 3. ПЕРЕЗАГРУЗКА СТРАНИЦЫ ПРИ КЛИКЕ НА ЛОГОТИП
  // ============================================================
  const logoLink = document.querySelector('.header__logo');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.reload();
    });
  }
});
