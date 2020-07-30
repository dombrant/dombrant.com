const onLoadEvents = () => {
  window.onload = () => {
    const backgroundImage = new Image();
    backgroundImage.src =
      "https://media.githubusercontent.com/media/dombrant/dombrant.com/master/img/palm-trees-6EBBDE.jpg";
    backgroundImage.onload = () => {
      document
        .querySelector(".banner")
        .classList.add("banner-image-background");
    };
    // Change the background of .banner from a blue color to the image with palm trees
    // The class banner-image-background is in banner-style.css

    document.querySelector(".email-link").innerHTML =
      '<a href="mailto:dombrant@gmail.com?subject=Hello Dominic!"> dombrant[at]gmail[dot]com</a>';
  };
};

export default onLoadEvents;
