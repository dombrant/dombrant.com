let didScroll = false;

window.addEventListener('scroll', () => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    headerSlideAnimation();
    didScroll = false;
  }
}, 200);
