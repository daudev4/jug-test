import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalBanner = document.querySelector('.modal--banner');
const modalBannerBtns = document.querySelectorAll('[data-modal="banner"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalBanner && modalBannerBtns.length) {
    setupModal(modalBanner, false, modalBannerBtns, false, false);
  }
};

export {initModals};
