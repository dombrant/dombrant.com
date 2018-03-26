const resumeClick = () => {
  smoothScroll(document.querySelector('.main-resume'), 500, 'easeInQuad');
};

const workClick = () => {
  smoothScroll(document.querySelector('.main-work'), 500, 'easeInQuad');
};

const contactClick = () => {
  smoothScroll(document.querySelector('.main-contact'), 500, 'easeInQuad');
};

document.querySelectorAll('nav li:first-child').forEach(i => {
  i.addEventListener('click', bannerButtonClick);
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      bannerButtonClick();
    }
    // Key 13 is enter
  });
});
// Instead of creating a new function for the about button, reuse the one for the banner button from banner-script.js

document.querySelectorAll('nav li:nth-child(2)').forEach(i => {
  i.addEventListener('click', resumeClick);
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      resumeClick();
    }
    // Key 13 is enter
  });
});

document.querySelectorAll('nav li:nth-child(3)').forEach(i => {
  i.addEventListener('click', workClick);
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      workClick();
    }
    // Key 13 is enter
  });
});

document.querySelectorAll('nav li:last-child').forEach(i => {
  i.addEventListener('click', contactClick);
  i.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      contactClick();
    }
    // Key 13 is enter
  });
});
// Use querySelectorAll for these because the header gets cloned in header-animation.js
// So there are two different nav elements to select
