const smoothScroll = destination => {
  window.scrollTo({
    top: destination,
    left: 0,
    behavior: "smooth"
  });
};
