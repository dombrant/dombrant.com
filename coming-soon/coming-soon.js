window.onload = () => {
  const backgroundImage = new Image();
  backgroundImage.src =
    "https://media.githubusercontent.com/media/dombrant/dombrant.com/master/img/palm-trees-6EBBDE.jpg";
  backgroundImage.onload = () => {
    document
      .querySelector(".container")
      .classList.add("banner-image-background");
  };
};
// Change the background of .container from a blue color to the image with palm trees
// The class banner-image-background is in coming-soon.css
