const onLoadEvents = () => {
  window.onload = () => {
    document.querySelector(".email-link").innerHTML =
      '<a href="mailto:dombrant@gmail.com?subject=Hello Dominic!"> dombrant[at]gmail[dot]com</a>';
  };
};

export default onLoadEvents;
