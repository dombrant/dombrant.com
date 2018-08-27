const mainDivsFadeIn = {
  completed: false,

  run() {
    const sections = document.querySelectorAll(".main > div");

    for (let [index, section] of sections.entries()) {
      // Use destructing along with .entries to access both the element and the index below

      if (isInView(section)) {
        section
          .querySelectorAll("*")
          .forEach(element => element.classList.add("fade-in-on-scroll"));
        // From lib/fade-in-on-scroll.css

        if (index === sections.length - 1) {
          // If the animation is being applied to the last element in the sections array

          this.completed = true;
          // Set completed to true
          // This will be used in scroll-listener.js to stop the requestAnimationFrame for this function
        }
      }
    }
  }
};
