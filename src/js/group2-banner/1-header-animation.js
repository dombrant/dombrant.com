let lastScrollTop = 0;
const header = document.querySelector('header');
// const header = header.cloneNode(true);
// Copy the header and place it at the top of the viewport when the user scrolls past the one below the banner section
// header.style.postion = 'fixed';
// Set header to be fixed
// header.classList.add('header-hidden');
// Make its top value -100vh so it won't be visible after it is added to the DOM below
// document.body.appendChild(header);

const showHeader = () => {
  // header.classList.remove('header-normal');
  header.classList.remove('header-slide-up');
  header.classList.add('header-slide-down');
  header.classList.add('header-fixed');
  // Activate the header-slide-down animation and show header at the top of the viewport
};

const hideHeader = () => {
  header.classList.remove('header-fixed');
  header.classList.remove('header-slide-down');
  header.classList.add('header-slide-up');
  // Hide header
};

const headerSlideAnimation = () => {
  const currentScrollTop = document.body.scrollTop;
  if (window.innerWidth > 550) {
    // If the user is on a desktop device

    if (currentScrollTop > lastScrollTop) {
      // If the user scrolls down

      if (header.getBoundingClientRect().bottom < 0) {
        // If the user scrolls past the header so it is out of view

        showHeader();
      }
      // } else if (
      //   lastScrollTop > currentScrollTop &&
      //   header.getBoundingClientRect().bottom > -250
      // ) {
      // If the user scrolls up and if the bottom of the header is less 250px away from coming into view

      //   hideHeader();
    }
  }

  lastScrollTop = currentScrollTop;
};
