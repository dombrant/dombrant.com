const bannerButtonClick = () => {
  smoothScroll(document.querySelector('.main-about'));
};

document
  .querySelector('.banner-button')
  .addEventListener('click', bannerButtonClick);
