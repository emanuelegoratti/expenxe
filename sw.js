/* Cache dell'app per l'uso offline. Cambia VERSION a ogni aggiornamento dei file (e APP_VERSION in index.html). */
const VERSION = "expenxe-31";
const FILES = ["./", "index.html", "jszip.min.js", "pdf-lib.min.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
/* File della lettura automatica (cartella ocr/, circa 6 MB): scaricati solo se l'OCR è attivo e tenuti in una cache
   che non si svuota a ogni versione. Se cambiano i file in ocr/, cambia anche OCR_CACHE. */
const OCR_CACHE = "expenxe-ocr-1";

self.addEventListener("install", e => {
  /* cache:"reload" scavalca la cache HTTP del browser, così non si salva una versione vecchia */
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== OCR_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  /* OCR: cache prima, rete solo la prima volta */
  if (/\/ocr\/[^/]+$/.test(new URL(e.request.url).pathname)) {
    e.respondWith(caches.open(OCR_CACHE).then(c => c.match(e.request.url).then(hit => hit || fetch(e.request.url).then(r => {
      if (r.ok) c.put(e.request.url, r.clone());
      return r;
    }))));
    return;
  }
  /* Rete prima (sempre ricontrollata col server), cache solo se offline */
  const key = e.request.mode === "navigate" ? "index.html" : e.request;
  e.respondWith(
    fetch(e.request.url, {cache: "no-cache"}).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(key, copy)); }
      return r;
    }).catch(() => caches.match(key).then(r => r || caches.match("index.html")))
  );
});
