const menuItems = [
  document.querySelector(".menu-button"),
  document.querySelector(".hamburger-svg"),
  document.querySelector(".close-svg")
];

const toggleMobileNav = () => {
  document
    .querySelectorAll("nav li")
    .forEach(li => li.classList.toggle("nav-shown"));
  document
    .querySelectorAll("header div svg")
    .forEach(svg => svg.classList.toggle("svg-hidden"));

  const toggleNavLabel = () => {
    let toggleNavLabelCount = 0;
    // Even values are for when the aria-label for .menu-button will be 'show menu'
    // Odd values are for 'hide menu'

    const menuButton = menuItems[0];

    if (toggleNavLabelCount % 2 === 0) {
      menuButton.setAttribute("aria-label", "hide menu");
    } else {
      menuButton.setAttribute("aria-label", "show menu");
    }

    toggleNavLabelCount++;
  };

  toggleNavLabel();
};

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    toggleMobileNav();
  });

  item.addEventListener("keypress", e => {
    const key = e.which || e.keyCode;
    // Some browsers use .which where others use .keycode for locating the keycode

    if (key === 13) {
      toggleMobileNav();
    }
    // Key 13 is enter
  });
});
