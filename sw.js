// Service Worker TURUTA
const CACHE_NAME = 'turuta-v1';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./privacidad.html",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png",
  "./badge_musica.png",
  "./badge_izado.png",
  "./badge_honores.png",
  "./BlackOpsOne.woff2",
  "./OpenSans-400.woff2",
  "./OpenSans-700.woff2"
];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', (e) => { e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request))); });
