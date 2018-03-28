const menuButtonClick = () => {
  document
    .querySelectorAll('nav li')
    .forEach(li => li.classList.toggle('nav-shown'));
};

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', menuButtonClick);
menuButton.addEventListener('keypress', e => {
  const key = e.which || e.keyCode;
  // Some browsers use .which where others use .keycode for locating the keycode

  if (key === 13) {
    menuButtonClick();
  }
  // Key 13 is enter
});
