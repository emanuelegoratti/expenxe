/* Cache dell'app per l'uso offline. Cambia VERSION a ogni aggiornamento dei file (e APP_VERSION in index.html). */
const VERSION = "expenxe-22";
const FILES = ["./", "index.html", "jszip.min.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  /* cache:"reload" scavalca la cache HTTP del browser, così non si salva una versione vecchia */
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(u => new Request(u, {cache: "reload"})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
/* Rete prima (sempre ricontrollata col server), cache solo se offline */
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  const key = e.request.mode === "navigate" ? "index.html" : e.request;
  e.respondWith(
    fetch(e.request.url, {cache: "no-cache"}).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(key, copy)); }
      return r;
    }).catch(() => caches.match(key).then(r => r || caches.match("index.html")))
  );
});
