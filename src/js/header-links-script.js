const resumeClick = () => {
  smoothScroll(document.querySelector('.main-resume'), 500, 'easeInQuad');
};

const workClick = () => {
  smoothScroll(document.querySelector('.main-work'), 500, 'easeInQuad');
};

const contactClick = () => {
  smoothScroll(document.querySelector('.main-contact'), 500, 'easeInQuad');
};

document
  .querySelectorAll('nav li:first-child')
  .forEach(i => i.addEventListener('click', bannerButtonClick));
// Instead of creating a new function for the about button, reuse the one for the banner button from banner-script.js

document
  .querySelectorAll('nav li:nth-child(2)')
  .forEach(i => i.addEventListener('click', resumeClick));

document
  .querySelectorAll('nav li:nth-child(3)')
  .forEach(i => i.addEventListener('click', workClick));

document
  .querySelectorAll('nav li:last-child')
  .forEach(i => i.addEventListener('click', contactClick));
// Use querySelectorAll for these because the header gets cloned in header-animation.js
// So there are two different nav elements to select
