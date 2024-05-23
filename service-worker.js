self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('hello-world-cache')
      .then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icon.png'
          // Add paths to other static resources you want to cache
        ]);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
