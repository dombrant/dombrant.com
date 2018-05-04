let didScroll = false;

window.addEventListener('scroll', () => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    requestAnimationFrame(headerSlideAnimation);
    // From header-animation.js

    requestAnimationFrame(mainDivsFadeIn);
    // From main-sections.js
    didScroll = false;
  }
}, 200);
