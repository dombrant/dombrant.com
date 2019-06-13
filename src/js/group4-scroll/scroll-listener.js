window.addEventListener("scroll", () => {
  let mainDivsFadeInTimeOut;
  // Variable to store the value of the requestAnimationFrame called below

  if (mainDivsFadeIn.completed) {
    cancelAnimationFrame(mainDivsFadeInTimeOut);
    // Cancel the requestAnimationFrame for mainDivsFadeIn once all the main sections are shown
  }

  mainDivsFadeInTimeOut = requestAnimationFrame(mainDivsFadeIn.run);
  // From main-sections.js
});
