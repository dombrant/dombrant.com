const scrollToElement = element => {
  const headerHeight = document.querySelector("header").getBoundingClientRect()
    .height;
  const elementTop = document.querySelector(element).offsetTop;
  // Get the height of the header and the top position of the element, these will be used to calculate where to scroll to when scrolling to the about section below
  // Instead of scrolling to the top of the section, it will scroll to the top of the section minus the height of the header, so that the header does not cover up the top of the section

  window.scrollTo({
    top: parseInt(elementTop - headerHeight),
    left: 0,
    behavior: "smooth"
  });
};
