// ملف sw.js - ضروري جداً لكي يعترف جوجل بأن موقعك هو تطبيق
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // هذا السطر يخدع المتصفح ويجعله يعتقد أن التطبيق يعمل بدون إنترنت (وهو شرط إجباري للتثبيت)
    e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
