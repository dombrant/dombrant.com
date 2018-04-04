const toggleMobileNav = () => {
  document
    .querySelectorAll('nav li')
    .forEach(li => li.classList.toggle('nav-shown'));
  document
    .querySelectorAll('header div svg')
    .forEach(svg => svg.classList.toggle('svg-hidden'));
};

const menuItems = [
  document.querySelector('.menu-button'),
  document.querySelector('.hamburger-svg'),
  document.querySelector('.close-svg')
];

menuItems.forEach(item => {
  item.addEventListener('click', toggleMobileNav);
  item.addEventListener('keypress', e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      toggleMobileNav();
    }
    // Key 13 is enter
  });
});
