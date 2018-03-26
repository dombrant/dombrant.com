const bannerButtonClick = () => {
  smoothScroll(document.querySelector('.main-about'), 500, 'linear');
};

document
  .querySelector('.banner-button')
  .addEventListener('click', bannerButtonClick);
