var cacheName = 'pwa-practice-v3';
var filesToCache = [
    '/' ,
    '/index.html',
    './css/bootstrap.css',
    './css/style.css',
    './Favicon ico/favicon.ico',
    './Loader/Double Ring-1s-200px.gif',
    './logo/clipart2105535.png',
    './images/banner1.jpg',
    './images/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg',
    './images/slider4.jpg',
    './images/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg',
    './data.json',
    './images/gallery.jpg',
    './images/thrift.jpg',
    './jsonimages/baby1.jpg',
    './jsonimages/baby5.jpg',
    './jsonimages/baby3.jpg',
    './jsonimages/baby6.jpg',
    './jsonimages/boy1.jpg',
    './jsonimages/boy3.jpg',
    './jsonimages/boy4.jpg',
    './jsonimages/boy2.jpg',
    './jsonimages/men1.jpg',
    './jsonimages/men2.jpg',
    './jsonimages/men3.jpg',
    './jsonimages/men4.jpg',
    './jsonimages/women1.jpg',
    './jsonimages/women2.jpg',
    './jsonimages/women3.jpg',
    './jsonimages/women4.jpg',
    './js/jquery-3.6.0.min.js',
    './js/app.js',
    '/PWA.js'

];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
          
        if (key !== cacheName) {
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response){
        return response || fetch(e.request);
      })
    );
});














