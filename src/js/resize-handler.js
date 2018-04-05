const changeDevice = () => {
  if (window.innerWidth <= 550) {
    document.body.dataset.device = 'mobile';
  } else {
    document.body.dataset.device = 'desktop';
  }

  console.log(document.body.dataset.device);
};

window.addEventListener('resize', changeDevice);
