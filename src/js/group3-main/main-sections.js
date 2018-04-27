const mainDivsH1FadeIn = () => {
  document.querySelectorAll('.main > div').forEach(div => {
    if (isInView(div)) {
      div.querySelector('h1').classList.add('fade-in-on-scroll');
    }
  });
};
