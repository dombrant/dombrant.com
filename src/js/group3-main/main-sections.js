const mainDivsFadeIn = () => {
  document.querySelectorAll('.main > div').forEach(div => {
    if (isInView(div)) {
      div
        .querySelectorAll('*')
        .forEach(element => element.classList.add('fade-in-on-scroll'));
    }
  });
};
