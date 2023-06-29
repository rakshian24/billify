const cacheData = 'billifyCacheV1';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/vendors-node_modules_web-vitals_dist_web-vitals_js.chunk.js',
        '/index.html',
        '/',
        '/static/media/cat-1.3692c478fea35e64517e.png',
        '/static/media/cat-2.b35bdc9bdb841d5048e4.png',
        '/static/media/cat-3.1fd2a638ca3e5ce645b4.png',
        '/static/media/cat-4.85ac1f179bf00d20706e.png',
        '/static/media/cat-5.7c8812afa34b9be40fe8.png',
        '/static/media/cat-6.6cd10712e4e18396258f.png',
      ])
    })
  )
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
    })
  )
})