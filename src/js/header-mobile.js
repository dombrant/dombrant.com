const menuButtonClick = () => {
  document
    .querySelectorAll('nav li')
    .forEach(li => li.classList.toggle('nav-shown'));
};

const menuItems = [
  document.querySelector('.menu-button'),
  document.querySelector('.hamburger-svg')
];

menuItems.forEach(item => {
  item.addEventListener('click', menuButtonClick);
  item.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      menuButtonClick();
    }
    // Key 13 is enter
  });
});
