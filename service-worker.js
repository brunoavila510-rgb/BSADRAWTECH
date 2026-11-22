self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => {
    // Opcional: Adicione aqui uma página offline caso o usuário fique sem internet
    // return caches.match('./offline.html');
  }));
});