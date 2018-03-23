let lastScrollTop = 0;
const header = document.querySelector('header');
const topHeader = header.cloneNode(true);
// Copy the header and place it at the top of the viewport when the user scrolls past the one below the banner section
topHeader.style.postion = 'fixed';
// Set topHeader to be fixed
topHeader.classList.add('header-hidden');
// Make its top value -100vh so it won't be visible after it is added to the DOM below
document.body.appendChild(topHeader);

const headerSlideAnimation = () => {
  const currentScrollTop = document.body.scrollTop;
  if (header.dataset.device.toLowerCase() === 'desktop') {
    // If the user is on a desktop device

    if (currentScrollTop > lastScrollTop) {
      // If the user scrolls down

      if (
        header.getBoundingClientRect().bottom < 0 &&
        topHeader.classList.contains('header-hidden')
      ) {
        // If the user scrolls past the header so it is out of view and if the topHeader is not visible

        topHeader.classList.remove('header-hidden');
        topHeader.classList.remove('header-slide-up');
        topHeader.classList.add('header-slide-down');
        // Activate the header-slide-down animation and show topHeader at the top of the viewport
      }
    } else if (
      lastScrollTop > currentScrollTop &&
      header.getBoundingClientRect().bottom > -250
    ) {
      // If the user scrolls up and if the bottom of the header is less 250px away from coming into view

      topHeader.classList.remove('header-slide-down');
      topHeader.classList.add('header-slide-up');
      topHeader.classList.add('header-hidden');
      // Hide topHeader
    }
  }

  lastScrollTop = currentScrollTop;
};

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
