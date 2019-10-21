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
    "revision": "2d9aff386ae64b65fe040321912c828b"
  },
  {
    "url": "api/account.html",
    "revision": "28ad08a5493e9eff655135c54e31b64c"
  },
  {
    "url": "api/data.html",
    "revision": "6be53bb2939a3ee377a59aa8bf1d4e8a"
  },
  {
    "url": "api/dept.html",
    "revision": "96dd8464f65131c550650405f8774987"
  },
  {
    "url": "api/domain.html",
    "revision": "aa0014f566efbaab2828ba7cbdb7a743"
  },
  {
    "url": "api/index.html",
    "revision": "0ce7437899f3f9c31c30416188c064d0"
  },
  {
    "url": "api/menu.html",
    "revision": "bb28d8572c04536e0f03bc34f075d35c"
  },
  {
    "url": "api/perm.html",
    "revision": "ded23ed729fc74bfd96d6b60a6093c1a"
  },
  {
    "url": "api/role.html",
    "revision": "597cd026dcf3f83ac523034f0a0cd4a1"
  },
  {
    "url": "api/user.html",
    "revision": "adee9508d519163b4146de8a7be31618"
  },
  {
    "url": "arch/qx.jpg",
    "revision": "9c526ada65aa244a8b4f4800cfe6850e"
  },
  {
    "url": "assets/css/0.styles.205cab44.css",
    "revision": "857a9fa02fba1a3a94886c28c9abb333"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b0297320.js",
    "revision": "82f455d9c61c19c19c01b3b23ade0dc4"
  },
  {
    "url": "assets/js/11.cb4d24d9.js",
    "revision": "1bfb59054584c3aa3c27c8217c90e487"
  },
  {
    "url": "assets/js/12.3c443f5e.js",
    "revision": "9ae8ba09b6488f11a25822d7c020f437"
  },
  {
    "url": "assets/js/13.939625d4.js",
    "revision": "67035001f6ab3607023f72739d70274f"
  },
  {
    "url": "assets/js/14.cda2b404.js",
    "revision": "1f56c554970ca1183544989ffefe4cf2"
  },
  {
    "url": "assets/js/15.c353633b.js",
    "revision": "b0611c74caff9bf8c21b665441fe795e"
  },
  {
    "url": "assets/js/16.ea4c594e.js",
    "revision": "0bdf1e3ea1ce25631390183eee5a00e7"
  },
  {
    "url": "assets/js/17.123b00da.js",
    "revision": "d003d687fb1f8c60661cb77f14cfc5d3"
  },
  {
    "url": "assets/js/18.f6d6e1ee.js",
    "revision": "49e096ef0ddeb7e201316b42097138ce"
  },
  {
    "url": "assets/js/19.06d57609.js",
    "revision": "a040a214bdae010e6bb27e98fd2ca8d9"
  },
  {
    "url": "assets/js/2.2331505c.js",
    "revision": "db1b1b3d6d3f97449f52a9f01be3449c"
  },
  {
    "url": "assets/js/20.f4dac8c3.js",
    "revision": "04dc6ec9e64484742b2039e5529acd3a"
  },
  {
    "url": "assets/js/21.2167bf25.js",
    "revision": "e4efa141635fd2b13d2215e97c76a7b7"
  },
  {
    "url": "assets/js/3.9f176d15.js",
    "revision": "c8c6573c3700b04bf8b83d3b791d8118"
  },
  {
    "url": "assets/js/4.a2e1d77f.js",
    "revision": "b95b53713ebac056a2e35997f0019e7f"
  },
  {
    "url": "assets/js/5.9f1450f8.js",
    "revision": "e6d97b130857783bcce4bb6931b5a532"
  },
  {
    "url": "assets/js/6.30e4ec97.js",
    "revision": "b7c81d13ff78022b1792c20a49d07059"
  },
  {
    "url": "assets/js/7.274e4838.js",
    "revision": "6bc2ae35e60347f5ce527da9c81d31e8"
  },
  {
    "url": "assets/js/8.fc29b7dc.js",
    "revision": "7a87a603923f5513605caf9721663d30"
  },
  {
    "url": "assets/js/9.5ff66feb.js",
    "revision": "4e5704d13533b71799ecbb48a0f3d727"
  },
  {
    "url": "assets/js/app.59567a40.js",
    "revision": "16612ae6dc0dc90d2b2a48e511b99e07"
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
    "url": "guide/architecture.html",
    "revision": "3f8d09fe1667c0e4914384444d60fc1b"
  },
  {
    "url": "guide/config.html",
    "revision": "09b678a01b91d91db963dace48240390"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa66fea712062d3a1ef544d58023b738"
  },
  {
    "url": "guide/index.html",
    "revision": "fa963a7b1d989bcf2087c3cbbb5da40e"
  },
  {
    "url": "guide/install.html",
    "revision": "1f3e880b17bfe457fd8516a00513fa28"
  },
  {
    "url": "guide/ldap.html",
    "revision": "c0483c08ebd2139d07c0d44e6d9f0473"
  },
  {
    "url": "guide/sys.html",
    "revision": "86debb6ed7eb3fc93184f1bb7910d313"
  },
  {
    "url": "guide/user.html",
    "revision": "dee6a4e0c29c9a59b1022f1392cdcc02"
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
    "revision": "f6c66345b2d618052f54fe7c304edfed"
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
