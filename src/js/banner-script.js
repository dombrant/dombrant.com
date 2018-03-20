const bannerButtonClick = () => {
  smoothScroll(document.querySelector('.main-about'), 500, 'linear', () =>
    document.querySelector('header').classList.add('header-slide-down')
  );
};

document
  .querySelector('.banner-button')
  .addEventListener('click', bannerButtonClick);
