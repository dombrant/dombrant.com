window.onload = () => {
  const backgroundImage = new Image();
  backgroundImage.src =
    'https://media.githubusercontent.com/media/dombrant/dombrant.com/master/img/palm-trees-6EBBDE.jpg';
  backgroundImage.onload = () => {
    document.querySelector('.banner').classList.add('banner-image-background');
  };
};
// Change the background of .banner from a blue color to the image with palm trees
// The class banner-image-background is in banner-style.css

const scrollToAbout = () => {
  smoothScroll(document.querySelector('.main-about'), 500, 'easeInQuad', () => {
    showHeader();
    // Callback to be executed after the call to smoothScroll finishes
    // Show topHeader so that when reaching the about section, the user will not have to scroll down to get it to be visible
    // From header-animation.js
  });
};

document
  .querySelector('.banner button')
  .addEventListener('click', scrollToAbout);
