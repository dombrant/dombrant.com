const staticCache = "cache-v1";
const assets = [
  "/",
  "/index.html",
  "/dist/style.min.css",
  "https://fonts.googleapis.com/css?family=Open+Sans|Slabo+27px&display=optional",
  "/dist/banner-listener.min.js",
  "/dist/header-links.min.js",
  "/dist/header-mobile.min.js",
  "/dist/main-sections.min.js",
  "/dist/on-load-events.min.js",
  "/dist/script.min.js",
  "/dist/scroll-to-element.min.js",
  "img/apple-news-welcome-message-screenshot.png",
  "img/blurry-image-load-screenshot.png",
  "img/dominic.jpg",
  "img/glorietta-screenshot.png",
  "img/moon.png",
  "img/palm-trees-6EBBDE.jpg",
  "img/wallpaper-creator-screenshot.png",
  "/resume/Dominic-Brant-Resume.pdf",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      cache.addAll(assets);
    })
  );
});
// Install service worker

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCache)
          .map((key) => caches.delete(key))
      );
      /* If the name of the cache equals that staticCache keep it
      Otherwise, delete that cache
      This is done to make sure the only cache stored on the device is the most recent one */
    })
  );
});
// Activate servicer worker

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheItem) => {
      return cacheItem || fetch(event.request);
      // Return the item from the cache if it exists there, or make a request to the server for it
    })
  );
});
