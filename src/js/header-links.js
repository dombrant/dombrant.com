import scrollToElement from "./scroll-to-element.js";
import { toggleMobileNav } from "./header-mobile.js";

const scrollToAbout = () => {
  scrollToElement(".main-about");
};

const scrollToResume = () => {
  scrollToElement(".main-resume");
};

const scrollToWork = () => {
  scrollToElement(".main-work");
};

const scrollToContact = () => {
  scrollToElement(".main-contact");
};

const activateHeaderListeners = () => {
  document.querySelectorAll("nav li:first-child").forEach((element) => {
    element.addEventListener("click", () => {
      scrollToAbout();
      toggleMobileNav();
    });

    element.addEventListener("keypress", (event) => {
      const key = event.which || event.keyCode;
      // Some browsers use .which where others use .keycode for locating the keycode

      if (key === 13) {
        scrollToAbout();
        toggleMobileNav();
      }
      // Key 13 is enter
    });
  });
  // Instead of creating a new function for the about button, reuse the one for the banner button from banner-script.js

  document.querySelectorAll("nav li:nth-child(2)").forEach((element) => {
    element.addEventListener("click", () => {
      scrollToResume();
      toggleMobileNav();
    });

    element.addEventListener("keypress", (event) => {
      const key = event.which || event.keyCode;
      // Some browsers use .which where others use .keycode for locating the keycode

      if (key === 13) {
        scrollToResume();
        toggleMobileNav();
      }
      // Key 13 is enter
    });
  });

  document.querySelectorAll("nav li:nth-child(3)").forEach((element) => {
    element.addEventListener("click", () => {
      scrollToWork();
      toggleMobileNav();
    });

    element.addEventListener("keypress", (event) => {
      const key = event.which || event.keyCode;
      // Some browsers use .which where others use .keycode for locating the keycode

      if (key === 13) {
        scrollToWork();
        toggleMobileNav();
      }
      // Key 13 is enter
    });
  });

  document.querySelectorAll("nav li:last-child").forEach((element) => {
    element.addEventListener("click", () => {
      scrollToContact();
      toggleMobileNav();
    });

    element.addEventListener("keypress", (event) => {
      const key = event.which || event.keyCode;
      // Some browsers use .which where others use .keycode for locating the keycode

      if (key === 13) {
        scrollToContact();
        toggleMobileNav();
      }
      // Key 13 is enter
    });
  });
  // Use querySelectorAll for these because the header gets cloned in header-animation.js
  // So there are two different nav elements to select
};

export default activateHeaderListeners;
