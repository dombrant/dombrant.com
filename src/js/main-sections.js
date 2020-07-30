const mainDivsFadeIn = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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

export default mainDivsFadeIn;
