document.addEventListener("DOMContentLoaded", () => {
  const bg = document.querySelector('.interactive-bg');
  const section = document.querySelector('.products-section');

  if (bg && section) {
    // 1. ДВИЖЕНИЕ ЗА МЫШКОЙ (ДЛЯ ПК) — теперь без прыжков, строго за курсором
    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      bg.style.left = `${x}px`;
      bg.style.top = `${y}px`;
    });

    // 2. ДВИЖЕНИЕ НА ТЕЛЕФОНАХ (Авто-перелив на 60 FPS)
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      let angle = 0;
      setInterval(() => {
        angle += 0.015; // Скорость перемещения круга
        const x = 50 + Math.sin(angle) * 20;
        const y = 50 + Math.cos(angle * 1.5) * 12;
        
        bg.style.left = `${x}%`;
        bg.style.top = `${y}%`;
      }, 16); // 16 миллисекунд создают максимальную плавность экрана
    }
  }
});