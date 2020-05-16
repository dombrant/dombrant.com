const mainDivsFadeIn = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        entry.target
          .querySelectorAll("*")
          .forEach((element) => element.classList.add("fade-in-slide-up"));
        observer.unobserve(entry.target);
      }
    });
  });

  document
    .querySelectorAll(".main > div")
    .forEach((section) => observer.observe(section));
};

mainDivsFadeIn();
