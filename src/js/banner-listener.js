import scrollToElement from "./scroll-to-element.js";

const activateBannerListener = () => {
  document
    .querySelector(".banner > button")
    .addEventListener("click", () => scrollToElement(".main-about"));
};
// Scroll to the about section when clicking the "learn more about me button"

export default activateBannerListener;
