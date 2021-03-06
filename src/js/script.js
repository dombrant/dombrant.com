import activateBannerListener from "./banner-listener.min.js";
import { activateMobileNavListener } from "./header-mobile.min.js";
import activateHeaderListeners from "./header-links.min.js";
import mainDivsFadeIn from "./main-sections.min.js";
import onLoadEvents from "./on-load-events.min.js";

activateBannerListener();
activateMobileNavListener();
activateHeaderListeners();
mainDivsFadeIn();
onLoadEvents();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../service-worker.js");
}
