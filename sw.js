async function cachedResponse(request) {
    const cache = await caches.open("v1")
    console.log(request)
    const response = await cache.match(request)
    return response || fetch(request)
}
async function updateCache(request) {
    const cache = await caches.open('VERSION');
    const response = await fetch(request)
    return cache.put(request, response)
}
self.addEventListener('install', event => {
    event.waitUntil(precache())
})
self.addEventListener('fetch', event => {
    const request = event.request;
    if (request.method !== "GET") {
        return;
    }
    event.respondWith(cachedResponse(request))
    event.waitUntil(updateCache(request))
})
async function precache() {
    const cache = await caches.open("v1");
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/index.js',
        // '/player.html',
        // '/src/MediaPlayer.js',
        // '/src/plugins/AutoPause.js',
        // '/src/plugins/AutoPlay.js',
        // '/assets/styles.css',
        // '/assets/BigBuckBunny.mp4',
    ])
}