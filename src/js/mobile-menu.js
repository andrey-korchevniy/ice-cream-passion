(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLnk1 = document.querySelector('.link-1');
  const closeMenuLnk2 = document.querySelector('.link-2');
  const closeMenuLnk3 = document.querySelector('.link-3');
  const closeMenuLnk4 = document.querySelector('.link-4');
  const closeMenuLnk5 = document.querySelector('.link-5');
  const closeMenu = document.querySelector('.button--menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLnk1.addEventListener('click', toggleMenu);
  closeMenuLnk2.addEventListener('click', toggleMenu);
  closeMenuLnk3.addEventListener('click', toggleMenu);
  closeMenuLnk4.addEventListener('click', toggleMenu);
  closeMenuLnk5.addEventListener('click', toggleMenu);
  closeMenu.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
