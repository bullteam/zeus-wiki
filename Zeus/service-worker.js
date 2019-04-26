/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b8b0f03fe949d21c0fcc0551e60b2a95"
  },
  {
    "url": "assets/css/0.styles.816bdec5.css",
    "revision": "b8bdcca2526b5a4636ade124d21974df"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.912459c9.js",
    "revision": "ed338bb33461b3b1595f6d0fdff4994d"
  },
  {
    "url": "assets/js/3.7e25aa92.js",
    "revision": "717f5f4e20d85b55ac73710df88a072c"
  },
  {
    "url": "assets/js/4.0fcf7e7d.js",
    "revision": "0f86a7af111406c860a037a5da83a5fe"
  },
  {
    "url": "assets/js/app.a95618cb.js",
    "revision": "983297481f33aadeecc480b948dd4235"
  },
  {
    "url": "bull.png",
    "revision": "37b7f689b04a7a593aa754c46245a3bd"
  },
  {
    "url": "index.html",
    "revision": "3cf2bb85de9ccd7133b29db7f5fb0a53"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
