const changeDevice = () => {
  if (window.innerWidth <= 550) {
    document.body.dataset.device = 'mobile';
  } else {
    document.body.dataset.device = 'desktop';
  }
};

window.addEventListener('resize', changeDevice);
