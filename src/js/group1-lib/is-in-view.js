const isInView = (element, includeMargins) => {
  'use strict';

  if (includeMargins === undefined) {
    includeMargins = false;
    // Set includeMargins to false by default
  }

  let elementScrollTop = element.getBoundingClientRect().top;
  // Calculate the distance from the top of element (NOT including its margin-top) to the top of the view
  let elmenentScrollBottom = element.getBoundingClientRect().bottom;

  if (includeMargins) {
    const elementStyle = getComputedStyle(element);
    elementScrollTop -= parseInt(elementStyle.marginTop);
    // Change elementScrollTop from calculating from the top of the element
    // to calculating from the top of the elmenent's margin-top
    elmenentScrollBottom -= parseInt(elementStyle.marginBottom);
  }

  if (
    elementScrollTop >= 0 &&
    elmenentScrollBottom - window.innerHeight <= 500
  ) {
    // if the element's top is within the viewport and the bottom is within 500px of the viewport
    return true;
    // Return true if the element is within the viewport
  }
};
