import activateBannerListener from "./banner-listener.js";
import { activateMobileNavListener } from "./header-mobile.js";
import activateHeaderListeners from "./header-links.js";
import mainDivsFadeIn from "./main-sections.js";
import onLoadEvents from "./on-load-events.js";

activateBannerListener();
activateMobileNavListener();
activateHeaderListeners();
mainDivsFadeIn();
onLoadEvents();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register(
    new URL("../../service-worker.js", import.meta.url),
    { type: "module" }
  );
}
