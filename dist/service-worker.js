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
<<<<<<< HEAD:dist/service-worker.js
    "revision": "d6630e59aa87aa863a3d1730de3b10e8"
  },
  {
    "url": "api/index.html",
    "revision": "1ce36e2e323fa0599106ce4b0764dc3c"
  },
  {
    "url": "api/user.html",
    "revision": "5d124b32032bd8d9f4a74086bf109c55"
=======
    "revision": "6b68f0c254a34717018770da6b16713f"
  },
  {
    "url": "api/index.html",
    "revision": "65e8b8940a355ddcadcc795338153ccc"
  },
  {
    "url": "api/user.html",
    "revision": "6bf9de13d857040dd07c8d67dfb69eac"
>>>>>>> 增加规范:Zeus/service-worker.js
  },
  {
    "url": "assets/css/0.styles.240434d1.css",
    "revision": "40bf5a3121cc780e4509f566b150ed27"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.6a44b4ff.js",
    "revision": "8efcce3e6b3daf84303823f3cef8924d"
  },
  {
    "url": "assets/js/2.912459c9.js",
    "revision": "ed338bb33461b3b1595f6d0fdff4994d"
  },
  {
    "url": "assets/js/3.745bf053.js",
    "revision": "4f56ac4d33d36c2366566d80109949d3"
  },
  {
    "url": "assets/js/4.fc889266.js",
    "revision": "f53b17aaef8d0ddb30aeb36163f20d8c"
  },
  {
    "url": "assets/js/5.7e0fd5f0.js",
    "revision": "0bed308889a66aa7dcdf146162d1a1a7"
  },
  {
    "url": "assets/js/6.9ed042f9.js",
    "revision": "c1744c5e11015501034728f2535f0b50"
  },
  {
    "url": "assets/js/7.89a56dd2.js",
    "revision": "785aca3bd710800f15ea207f53c29fe0"
  },
  {
    "url": "assets/js/8.8f4b3d2f.js",
    "revision": "7cbeb4bd195bb52b547fd9670aca553f"
  },
  {
    "url": "assets/js/9.57656763.js",
    "revision": "416388f4f9261ba93a56756507c9ed8c"
  },
  {
<<<<<<< HEAD:dist/service-worker.js
    "url": "assets/js/app.13df217f.js",
    "revision": "10f26426cb0c005baf06bcf0cc9bff17"
=======
    "url": "assets/js/app.92ba9deb.js",
    "revision": "5113690267deb64d23f181c59d694f9d"
>>>>>>> 增加规范:Zeus/service-worker.js
  },
  {
    "url": "bull.png",
    "revision": "37b7f689b04a7a593aa754c46245a3bd"
  },
  {
    "url": "guide/1.png",
    "revision": "d8111ae9b6ac3fe69f52ec201f852e6d"
  },
  {
    "url": "guide/10.png",
    "revision": "52e49a641632d54484c53282e2558275"
  },
  {
    "url": "guide/11.png",
    "revision": "776ef4255fbe8da33f5d140e5417cae5"
  },
  {
    "url": "guide/12.png",
    "revision": "3e154fa0510c54afb55156f05dbe2563"
  },
  {
    "url": "guide/13.png",
    "revision": "3c58b7843ba64474d06d8ed1a4fb8005"
  },
  {
    "url": "guide/14.png",
    "revision": "726de956920e09390b50c45ee96b67c2"
  },
  {
    "url": "guide/2.png",
    "revision": "1fba43ea515d2ca456ecf3b4f609e7e6"
  },
  {
    "url": "guide/3.png",
    "revision": "67d472fc0a33829dfd9f934db59619e3"
  },
  {
    "url": "guide/4.png",
    "revision": "a1ec82e512536b7c6d05abb44f07a8d5"
  },
  {
    "url": "guide/5.png",
    "revision": "e75dcd4028ac14b608b60dec42f07848"
  },
  {
    "url": "guide/6.png",
    "revision": "1c617a4c307f1fd66bb68523902d584b"
  },
  {
    "url": "guide/7.png",
    "revision": "717ccb1e6cbcc8025942049356c72bb5"
  },
  {
    "url": "guide/8.png",
    "revision": "95bea447a51cad39a8f841d50b16d081"
  },
  {
    "url": "guide/9.png",
    "revision": "e46d61d60f60586411f39102ae0f7d70"
  },
  {
    "url": "guide/arch.png",
    "revision": "6581850be369f3ae5b6c4c2369a965aa"
  },
  {
    "url": "guide/getting-started.html",
<<<<<<< HEAD:dist/service-worker.js
    "revision": "204fddda80124e51061a4b8cb9cb0ed9"
  },
  {
    "url": "guide/index.html",
    "revision": "0e3a141b7a12d57c4abcd9befbee7fdc"
  },
  {
    "url": "guide/sys.html",
    "revision": "432922a563dd24a3723be35ac0486fb4"
  },
  {
    "url": "guide/user.html",
    "revision": "103de4cf66d86d6ccc6d878de1e963ef"
=======
    "revision": "386e9c97f9efa84e04646d1a2b427fdf"
  },
  {
    "url": "guide/index.html",
    "revision": "94afc9218c3b7bcd52b7261cced59bf0"
  },
  {
    "url": "guide/sys.html",
    "revision": "55003854ae2e89756050523be677c28f"
  },
  {
    "url": "guide/user.html",
    "revision": "6fff4090a4e2dc71768f90383f0101af"
>>>>>>> 增加规范:Zeus/service-worker.js
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5cc7e9c000523749a298930b881dbac2"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "85680b8c664e0720bb5f7b807e8c59db"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "672c2546ced2ba4b6273b923c67523e4"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "8a674f0ec80365815f6721b6906515c4"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "24b790bdb52985d90ff85542f4e5a9c3"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "d1ea90cd304c069cd9cd5321153e6539"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "66f5d072ab6e9ac15a6bdbcfc2965ba4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "24b790bdb52985d90ff85542f4e5a9c3"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "55fff24d6476f7a57d51016056a61011"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "06bb362822028a5907303792da098da4"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "bafedf066bd2414aec570b086e08b5f0"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "907456ec302a7d44b579cdc3f3b39183"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
<<<<<<< HEAD:dist/service-worker.js
    "revision": "011a3be78d4d60e0489f3b34d67b6f06"
=======
    "revision": "1817b90b1ca2fa9060b0c717bacddb4e"
>>>>>>> 增加规范:Zeus/service-worker.js
  },
  {
    "url": "logo.png",
    "revision": "85680b8c664e0720bb5f7b807e8c59db"
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
