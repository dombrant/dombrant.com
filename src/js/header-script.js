const headerSlideDown = () => {
  const header = document.querySelector('header');
  if (header.getBoundingClientRect().bottom < 0) {
    // header.classList.remove('header-slide-up');
    header.classList.add('header-slide-down');
  }
  // Only run the function if the header is already fixed to the top of the viewport
};

let didScroll = false;

window.addEventListener('scroll', () => {
  didScroll = true;
});

setInterval(() => {
  if (didScroll) {
    headerSlideDown();
    didScroll = false;
  }
}, 200);
