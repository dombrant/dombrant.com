import activateBannerListener from"./banner-listener.min.js";import{activateMobileNavListener}from"./header-mobile.min.js";import activateHeaderListeners from"./header-links.min.js";import mainDivsFadeIn from"./main-sections.min.js";import onLoadEvents from"./on-load-events.min.js";activateBannerListener(),activateMobileNavListener(),activateHeaderListeners(),mainDivsFadeIn(),onLoadEvents(),"serviceWorker"in navigator&&navigator.serviceWorker.register("../service-worker.js").then(e=>console.log("Service worker registered")).catch(e=>console.log(`Service worker not registered: ${e}`));