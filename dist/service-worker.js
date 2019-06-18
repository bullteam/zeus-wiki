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
    "revision": "15eea86d3a402415df31eabeeab39e96"
  },
  {
    "url": "api/account.html",
    "revision": "f5360d09b6420ad39980de431f0e5ecd"
  },
  {
    "url": "api/data.html",
    "revision": "c1400df1970d118f9611a7f73b750fba"
  },
  {
    "url": "api/dept.html",
    "revision": "c75b74a028dd1c01d110903519766252"
  },
  {
    "url": "api/domain.html",
    "revision": "8ebbc08df4357428a9bc62bf65efb254"
  },
  {
    "url": "api/index.html",
    "revision": "85ab6a1ac2f12a122324ac66c26cc639"
  },
  {
    "url": "api/menu.html",
    "revision": "2ce116e8f07d66f89506ea08760ad79c"
  },
  {
    "url": "api/perm.html",
    "revision": "25f8d1816d66dab6521b5516366bb159"
  },
  {
    "url": "api/role.html",
    "revision": "b2a72672e5f15d309a7c81472d284a5b"
  },
  {
    "url": "api/user.html",
    "revision": "d9b06b460c079397c3faa0940e8b1851"
  },
  {
    "url": "assets/css/0.styles.78c169a6.css",
    "revision": "a868e11d2d3ae0362ac19b90d0213a2c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4b5d6f91.js",
    "revision": "42075fc554ea080f82c8ed514abfec41"
  },
  {
    "url": "assets/js/11.66b741a3.js",
    "revision": "0df1ad1ed18c8050ba11832a716ee55f"
  },
  {
    "url": "assets/js/12.a8f313b9.js",
    "revision": "d867cc2bf3ba6f590f8d69c92076bba9"
  },
  {
    "url": "assets/js/13.5cde4275.js",
    "revision": "29d06632d887cc1d85f136fe3297ee40"
  },
  {
    "url": "assets/js/14.49800f28.js",
    "revision": "74e4cb124022b950ec712e791484d185"
  },
  {
    "url": "assets/js/15.e7cad991.js",
    "revision": "32db810fbeb401e5e08cc5bac2846da5"
  },
  {
    "url": "assets/js/16.f4e1fb9c.js",
    "revision": "7de50420c2a33ff5273cb4a38a810d9c"
  },
  {
    "url": "assets/js/17.1625708a.js",
    "revision": "1336e61d90d906c227f12d9cebdd6b90"
  },
  {
    "url": "assets/js/2.912459c9.js",
    "revision": "ed338bb33461b3b1595f6d0fdff4994d"
  },
  {
    "url": "assets/js/3.bfada130.js",
    "revision": "eb55a38b69a8c727d31fe440fbdad7eb"
  },
  {
    "url": "assets/js/4.23b9dbe7.js",
    "revision": "daf339338a4e5fcdc453f22dc54176e3"
  },
  {
    "url": "assets/js/5.f34dd450.js",
    "revision": "d5b27943b23d336f9a44a88ca571c1ce"
  },
  {
    "url": "assets/js/6.67834c65.js",
    "revision": "317448e1926a2dc035a8c7f47fc164eb"
  },
  {
    "url": "assets/js/7.ea1496c3.js",
    "revision": "60f89c4aba97ee8cc6ad5b53154a816d"
  },
  {
    "url": "assets/js/8.696deb03.js",
    "revision": "99a478478db6026c395c4a2793a5038d"
  },
  {
    "url": "assets/js/9.2e49afab.js",
    "revision": "8e122cf4357baa4cab5651c790f013fe"
  },
  {
    "url": "assets/js/app.489e4cc8.js",
    "revision": "e245579f8a55261c6ac26309c6dbe9b2"
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
    "revision": "09acd812afbb03b2411968213eaf6aed"
  },
  {
    "url": "guide/index.html",
    "revision": "ce2f9d972155c225e4dcd3f8ed62c579"
  },
  {
    "url": "guide/sys.html",
    "revision": "eef6204d276c9da104f649d3692f15e5"
  },
  {
    "url": "guide/user.html",
    "revision": "48d302fe378baec695e1398790e275cd"
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
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "f66b7c53cda4dfe7b28bcccd82543c3c"
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
