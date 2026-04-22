// Service Worker — Network-first strategy
// Always tries to fetch the latest version, falls back to cache if offline

const CACHE_NAME = 'gol-gabriel-v2';
const ASSETS = [
    './',
    './index.html',
    './scripts/game.js',
    './manifest.json',
    './assets/art/icon-180.png',
    './assets/art/icon-192.png',
    './assets/art/icon-512.png'
];

// Install: pre-cache core assets
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// Activate: delete old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Fetch: network-first — always try fresh, fall back to cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Cache the fresh response
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
