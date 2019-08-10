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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fea1dcd49f2d05e5358efd05ce92080f"
  },
  {
    "url": "api/account.html",
    "revision": "10cee448069d2d4e6b4156b589234564"
  },
  {
    "url": "api/data.html",
    "revision": "18e40c2183a7cb37129a2114dd305659"
  },
  {
    "url": "api/dept.html",
    "revision": "7541cbbe6a20faab444dc6defac66c71"
  },
  {
    "url": "api/domain.html",
    "revision": "2b7da36bb4fa0c8ef0b123f16c8170b8"
  },
  {
    "url": "api/index.html",
    "revision": "f293d564954a6c00ef618f8acb12729d"
  },
  {
    "url": "api/menu.html",
    "revision": "809c9f2e7b28d75e436641152673795a"
  },
  {
    "url": "api/perm.html",
    "revision": "18f2fda5d17c7c2c038dc3296d50f723"
  },
  {
    "url": "api/role.html",
    "revision": "01ef2c4c27e53de790ce14a3d23148dc"
  },
  {
    "url": "api/user.html",
    "revision": "add231b6e8c83d4291e7003fe558907c"
  },
  {
    "url": "assets/css/0.styles.97848c4d.css",
    "revision": "2914a22f4c17b37a9b69ddb9f367a6c8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6d8bdb93.js",
    "revision": "961d3631da17cd9a5bfd80504df64b82"
  },
  {
    "url": "assets/js/11.8738e476.js",
    "revision": "ae70e694b8b80b757fc7e52eff8fbbf5"
  },
  {
    "url": "assets/js/12.b840432d.js",
    "revision": "5df98ecf686a867225192865d0f3f88e"
  },
  {
    "url": "assets/js/13.9f6389ec.js",
    "revision": "c7831e503a4c6bc2161dbafc806666bf"
  },
  {
    "url": "assets/js/14.6175f864.js",
    "revision": "d5a297dfc9519484604839bf3a706be2"
  },
  {
    "url": "assets/js/15.967e31eb.js",
    "revision": "d1d54a91aaebe979b982bb5edd8926d0"
  },
  {
    "url": "assets/js/16.0bd5a24f.js",
    "revision": "79861c75d5642b5e580f8a85ad0dbd1a"
  },
  {
    "url": "assets/js/17.259ac453.js",
    "revision": "5bc63d22a80800a547f0210d094f37a1"
  },
  {
    "url": "assets/js/2.c1840c67.js",
    "revision": "c01d466256a7354cb75101c878831c90"
  },
  {
    "url": "assets/js/3.de1c9e94.js",
    "revision": "81b772c02be89d3682a5d1e3ab77ab5d"
  },
  {
    "url": "assets/js/4.3633cd72.js",
    "revision": "9904a0e4349a41a9d2888b169f60ea8e"
  },
  {
    "url": "assets/js/5.383733c3.js",
    "revision": "726203958f7f2d0c67b4d9d51c6e003f"
  },
  {
    "url": "assets/js/6.22781e5d.js",
    "revision": "20701da3fa28f1fdadcfd3a5ecba3fb8"
  },
  {
    "url": "assets/js/7.8a016ef2.js",
    "revision": "4894f1854a3694cb9db5548b8eaf35ce"
  },
  {
    "url": "assets/js/8.a200f94d.js",
    "revision": "db93564be2201ddb7c5b70bf9ffe3c67"
  },
  {
    "url": "assets/js/9.654f5ffe.js",
    "revision": "feb3055eceef10b1703a14d40365b0e6"
  },
  {
    "url": "assets/js/app.e90168d3.js",
    "revision": "3d0fbe55e913dc676708aed38655ad0d"
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
    "revision": "c118a276972ae3d4a2751e1b020b32b7"
  },
  {
    "url": "guide/index.html",
    "revision": "8b427d17f803674852e6342400dd7266"
  },
  {
    "url": "guide/sys.html",
    "revision": "ffe26bf3bf1f7473fabae4c49404aa85"
  },
  {
    "url": "guide/user.html",
    "revision": "c5695d9901f62761926ee2d63ac70fc0"
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
    "url": "index.html",
    "revision": "70a6c140e0d8c0ab5155862c0b7aee07"
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
