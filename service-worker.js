self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/appproyectosavances/',
        '/appproyectosavances/index.html',
        '/appproyectosavances/manifest.json',
        'https://i.pinimg.com/474x/fb/7a/96/fb7a96b2325e350541a18ace9422c752.jpg'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});