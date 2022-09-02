self.addEventListener('install', event => {
    console.log('sw ./ => installing...');

    // cache index
    //event.waitUntil(
    //    caches.open('static-v1').then(cache => cache.add('/index.html'))
    //);
    
    console.log("sw ./ =>  install event detected e index.html cacheado!!!");
    
});


self.addEventListener('activate', event => {
    console.log('sw ./ => Evento activate ocorreu, agora pronto pra interceptar fetches');
});


self.addEventListener('fetch', event => {
    console.log("sw ./ => Detectei um evento fetch para o recurso abaixo:");
//    console.log("sw ./ => "+event.request.url);
//    const url = new URL(event.request.url);
    // serve the cat SVG from the cache if the request is
    // same-origin and the path is '/dog.svg'
 //   if (url.origin == location.origin && url.pathname == '/index.html') {
 //       event. respondWith(caches.match('/index.html'));
 //   }
});
