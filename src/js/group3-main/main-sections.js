const mainDivsFadeIn = {
  completed: false,

  run() {
    const sections = document.querySelectorAll('.main > div');

    sections.forEach((div, index) => {
      if (isInView(div)) {
        div
          .querySelectorAll('*')
          .forEach(element => element.classList.add('fade-in-on-scroll'));

        if (index === sections.length - 1) {
          // If the animation is being applied to the last element in the sections array

          this.completed = true;
          // Set completed to true
          // This will be used in scroll-listener.js to stop the requestAnimationFrame for this function
        }
      }
    });
  }
};
