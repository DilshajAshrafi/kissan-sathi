const CACHE_NAME = 'kisaan-sathi-v20';
const APP_SHELL = [
  './', './index.html', './theme.css', './page-redesign.css', './agri-assistant.css',
  './theme.js', './language-manager.js', './agri-assistant.js', './site-enhancements.css', './site-enhancements.js',
  './favicon.svg', './irrigation-support.html', './crop-consultation.html', './soil-pest-care.html', './scheme-guidance.html', './request-sent.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok && new URL(event.request.url).origin === self.location.origin) {
      const copy = response.clone(); caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
