const scrollToElement = element => {
  const elementHeight = () => {
    document.querySelector(element).getBoundingClientRect().top +
      window.pageYOffset -
      document.documentElement.clientTop;

    console.log(elementHeight);
  };

  const headerHeight = document.querySelector('header').getBoundingClientRect()
    .height;
  const elementTop = document.querySelector(element).getBoundingClientRect()
    .top;
  // Get the height of the header and the top position of the element, these will be used to calculate where to scroll to when scrolling to the about section below
  // Instead of scrolling to the top of the section, it will scroll to the top of the section minus the height of the header, so that the header does not cover up the top of the section

  smoothScroll(parseInt(elementTop - headerHeight), 500, 'easeInQuad');
};
