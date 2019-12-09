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
    "revision": "a63be623755e0fcbb06c2c7efdd4b0ff"
  },
  {
    "url": "api/account.html",
    "revision": "7275b4465c51d98201b1493f5ef53ec9"
  },
  {
    "url": "api/data.html",
    "revision": "12c8aa0234556f466b76d56638268281"
  },
  {
    "url": "api/dept.html",
    "revision": "3476365849fc74791077c02ceef5a7bc"
  },
  {
    "url": "api/domain.html",
    "revision": "f7a473b0073d20c74abdfb2bbad3eb78"
  },
  {
    "url": "api/index.html",
    "revision": "5365cc4e832003333e8d1cfeb0abbc46"
  },
  {
    "url": "api/menu.html",
    "revision": "641149b8a31781a4cd62144800c48ff1"
  },
  {
    "url": "api/perm.html",
    "revision": "a984a61131511f3b67022f7cddf1228a"
  },
  {
    "url": "api/role.html",
    "revision": "00a8be3176b3c2871739ec79f4a66115"
  },
  {
    "url": "api/user.html",
    "revision": "3a3abec8dca09beec483c418cfdec8e5"
  },
  {
    "url": "arch/qx.jpg",
    "revision": "9c526ada65aa244a8b4f4800cfe6850e"
  },
  {
    "url": "assets/css/0.styles.560eefc7.css",
    "revision": "c0b284ab96eecec2080f6ea9adb2d30a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.58a03d8d.js",
    "revision": "032577b375e6cd2a6343e2c354e99bf9"
  },
  {
    "url": "assets/js/11.56f72a16.js",
    "revision": "6c1edff3ca563e3218271e88529c2fc8"
  },
  {
    "url": "assets/js/12.9592311f.js",
    "revision": "43279e1ae3a2070fb426415edeeed533"
  },
  {
    "url": "assets/js/13.a8cab961.js",
    "revision": "1dd74d8d4fb0a249cdbcd90b475f8af3"
  },
  {
    "url": "assets/js/14.86d749ba.js",
    "revision": "5fa62cadd0e06f2a000cac879d83961d"
  },
  {
    "url": "assets/js/15.bb53c409.js",
    "revision": "11606155262333196fb393bbdd771f5b"
  },
  {
    "url": "assets/js/16.b04a6a86.js",
    "revision": "39af56769db5caaf01806446f9df6e22"
  },
  {
    "url": "assets/js/17.bd4d27ed.js",
    "revision": "31642b50c5f4a072b869efe24ffcb783"
  },
  {
    "url": "assets/js/18.258805cf.js",
    "revision": "280cd622e8829f011c55118c11005eb7"
  },
  {
    "url": "assets/js/19.9a0ce87b.js",
    "revision": "2ea2cc0393feee3f9af6d8dda0ae4bc1"
  },
  {
    "url": "assets/js/2.d13d3fb2.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/20.c1f79baf.js",
    "revision": "f214c0c14cb9c6c66cc5323bf77d0ddf"
  },
  {
    "url": "assets/js/21.44449492.js",
    "revision": "e8717841a331e4642b90626e60bacfb4"
  },
  {
    "url": "assets/js/3.2e57e284.js",
    "revision": "11c91b4dbfdb79ed0ff263663e512296"
  },
  {
    "url": "assets/js/4.f693407e.js",
    "revision": "b2e2685a8ba5dd99a3edf5188919c474"
  },
  {
    "url": "assets/js/5.4dc30dca.js",
    "revision": "aef3502d68bfe53bcbcc761b7bcd8ba8"
  },
  {
    "url": "assets/js/6.765e8274.js",
    "revision": "6a8599f7e45012d5e1d60b1221c329a1"
  },
  {
    "url": "assets/js/7.ed658d0c.js",
    "revision": "14fa9976ac927b4539c6553e6af0a694"
  },
  {
    "url": "assets/js/8.83b94661.js",
    "revision": "ccca0e8fbf0d2c446654fa745cae6907"
  },
  {
    "url": "assets/js/9.b3224f4c.js",
    "revision": "c15d9a9483811ab9576cb7212db815e2"
  },
  {
    "url": "assets/js/app.d746ff12.js",
    "revision": "8018a6b350b573a0c27fca696b45515d"
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
    "revision": "a8bbc1b3ac505517b11e62b65f249979"
  },
  {
    "url": "guide/config.html",
    "revision": "ce0702c358dc1447ce77438c09543103"
  },
  {
    "url": "guide/data.html",
    "revision": "7ec692d8b98ee066daac2ba518ccbd42"
  },
  {
    "url": "guide/develop.html",
    "revision": "d73c402406e3aaff9384e1b8ef78bdd9"
  },
  {
    "url": "guide/index.html",
    "revision": "713ba182142597fa525e9059bb655978"
  },
  {
    "url": "guide/install.html",
    "revision": "7dbce70bc4d7a8b41a95802b15c963e1"
  },
  {
    "url": "guide/ldap.html",
    "revision": "41afe8fbff6c912817d1b6268a6e31b2"
  },
  {
    "url": "guide/user.html",
    "revision": "e0f45d35f7a590e7fe15c737d98cf895"
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
    "revision": "15b086cfba87d76b831ba5aa0e9ca47f"
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
