const CACHE_ELEMENTS = [
  "./",
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./style.css",
  "./components/Contador.js",
  "./index.js",
];
//NOMBRE DE LA CACHE
const CACHE_NAME = "v3_cache_contador_react";
//INSTALA EL CACHE DEL SERVICE WORKER
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => {
          self.skipWaiting();
        })
        .catch(console.log);
    })
  );
});
//DE ENCARGA DE ACTIVAR EL CACHE Y
// DE VALIDAR SI LOS CACHES INSTALADOS SON EL MISMO, SI NO ES ASÍ VA A BORRAR LA VERSION ANTIGUA
self.addEventListener("activate", (e) => {
  // self es lo mismo que escribir "const self = this"
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return (
              cacheWhitelist.indexOf(cacheName) === -1 &&
              caches.delete(cacheName)
            );
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

//Haces match con un respondWith, si es que NO existe la info de las rutas de la CACHE
// se vuelve a obtener
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  ); //se hace una promesa y si el resultado se obtiene igual no pasa nada, pero si no se obtiene de internet
});

//el fetch se ejecuta cada que se ejecuta una petición
