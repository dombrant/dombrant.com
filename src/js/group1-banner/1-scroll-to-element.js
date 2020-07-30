const scrollToElement = (element) => {
  const elementTop = document.querySelector(element).offsetTop;
  // Get the top position of the element, these will be used to calculate where to scroll to when scrolling to the about section below

  window.scrollTo({
    top: parseInt(elementTop),
    left: 0,
    behavior: "smooth",
  });
};

export default scrollToElement;
