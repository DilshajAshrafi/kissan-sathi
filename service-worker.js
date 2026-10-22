const CACHE_NAME = 'kisaan-sathi-v24';
const APP_SHELL = [
  './', './index.html', './theme.css', './page-redesign.css', './agri-assistant.css',
  './theme.js', './language-manager.js', './agri-assistant.js', './site-enhancements.css', './site-enhancements.js',
  './favicon.svg', './irrigation-support.html', './crop-consultation.html', './soil-pest-care.html', './scheme-guidance.html', './request-sent.html', './download-app.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(
    keys.filter((key) => key.startsWith('kisaan-sathi-') && key !== CACHE_NAME).map((key) => caches.delete(key))
  )));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  if (new URL(event.request.url).pathname.endsWith('/Kisaan-Sathi.apk')) return;
  event.respondWith(caches.open(CACHE_NAME).then((cache) => cache.match(event.request).then((cached) => {
    if (cached) return cached;
    return fetch(event.request).then((response) => {
      if (response.ok) {
        event.waitUntil(cache.put(event.request, response.clone()).catch((error) => {
          console.error('Could not cache a site response:', error.message);
        }));
      }
      return response;
    }).catch((error) => {
      if (event.request.mode !== 'navigate') throw error;
      return cache.match('./index.html').then((fallback) => {
        if (fallback) return fallback;
        throw error;
      });
    });
  })));
});
