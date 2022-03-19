const Calculator = "calculator-site-v1"

const assets = [
    "/",
    "index.html",
    "calc.css",
    "app.js",
    "favicon-32x32.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(Calculator).then(cache => {
        cache.addAll(assets)
      })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
})
