self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // 基本的なオフライン対応のキャッシュスルー
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
