let didScroll = false;

window.addEventListener('scroll', () => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    headerSlideAnimation();
    // From header-animation.js

    mainDivsH1FadeIn();
    // From main-sections.js
    didScroll = false;
  }
}, 200);
