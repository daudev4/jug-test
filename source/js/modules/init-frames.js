const modalBannerBtns = document.querySelectorAll('[data-modal="banner"]');

const initFrames = () => {
  modalBannerBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
      const btnAnchor = btn.href.split('#').pop();
      const banner = document.querySelector(`#${btnAnchor}`);

      banner.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    });
  });
};

export {initFrames};
