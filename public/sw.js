self.addEventListener('install', event =>{
    self.skipWaiting();  // Take control immediately
});

self.addEventListener('activate', event =>{
    event.waitUntil(
        caches.keys().then( keys => {
            console.log("El service worker ha sido activado")
            return Promise.all(
                keys
                    .filter(key => key !== staticCacheName )
                    .map ( key => caches.delete(key) )
            )
        })
    )
    self.clients.claim(); // Take control immediately
})

self.addEventListener('fetch', event => {

})
