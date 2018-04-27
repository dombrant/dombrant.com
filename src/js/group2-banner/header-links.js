const scrollToResume = () => {
  smoothScroll(document.querySelector('.main-resume'), 500, 'easeInQuad');
};

const scrollToWork = () => {
  smoothScroll(document.querySelector('.main-work'), 500, 'easeInQuad');
};

const scrollToContact = () => {
  smoothScroll(document.querySelector('.main-contact'), 500, 'easeInQuad');
};

document.querySelectorAll('nav li:first-child').forEach(i => {
  i.addEventListener('click', () => {
    scrollToAbout();
    toggleMobileNav();
  });
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      scrollToAbout();
      toggleMobileNav();
    }
    // Key 13 is enter
  });
});
// Instead of creating a new function for the about button, reuse the one for the banner button from banner-script.js

document.querySelectorAll('nav li:nth-child(2)').forEach(i => {
  i.addEventListener('click', () => {
    scrollToResume();
    toggleMobileNav();
  });
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      scrollToResume();
      toggleMobileNav();
    }
    // Key 13 is enter
  });
});

document.querySelectorAll('nav li:nth-child(3)').forEach(i => {
  i.addEventListener('click', () => {
    scrollToWork();
    toggleMobileNav();
  });
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      scrollToWork();
      toggleMobileNav();
    }
    // Key 13 is enter
  });
});

document.querySelectorAll('nav li:last-child').forEach(i => {
  i.addEventListener('click', () => {
    scrollToContact();
    toggleMobileNav();
  });
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      scrollToContact();
      toggleMobileNav();
    }
    // Key 13 is enter
  });
});
// Use querySelectorAll for these because the header gets cloned in header-animation.js
// So there are two different nav elements to select
