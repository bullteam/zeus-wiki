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
    "revision": "44eb200cf10a3b4d5097f4b88f1220c0"
  },
  {
    "url": "api/account.html",
    "revision": "836cb4145ad3d68084e43210cf51dbf1"
  },
  {
    "url": "api/data.html",
    "revision": "83810bdc5ee2993273c1da8c1129d90a"
  },
  {
    "url": "api/dept.html",
    "revision": "de105c4dcbdfed0d5d9f038172e53596"
  },
  {
    "url": "api/domain.html",
    "revision": "82acef65c6c04b0340f90f2af2db0bee"
  },
  {
    "url": "api/index.html",
    "revision": "01c61d25c61984b19629210eddbd2298"
  },
  {
    "url": "api/menu.html",
    "revision": "bf9dcd8d75ddc79c03e58f5aefc79a63"
  },
  {
    "url": "api/perm.html",
    "revision": "4ae1646d34360541f7fea12ccf3008b1"
  },
  {
    "url": "api/role.html",
    "revision": "8be3be670f3fb839a5398004a9391847"
  },
  {
    "url": "api/user.html",
    "revision": "73646ea2900b23cb5271f01062d33607"
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
    "url": "assets/js/11.5f5a2e91.js",
    "revision": "f514e5e04ce31b842d83c494b6c95671"
  },
  {
    "url": "assets/js/12.9ad6d99a.js",
    "revision": "d56b52262f5f8528b67bae8809102ffe"
  },
  {
    "url": "assets/js/13.03f2a909.js",
    "revision": "9ca8cb1eda2c21e2a152021b18f84436"
  },
  {
    "url": "assets/js/14.536292a4.js",
    "revision": "7439e4bd5c075d33ae08e775a1a2bc2e"
  },
  {
    "url": "assets/js/15.7ad2ec20.js",
    "revision": "1ff38d4ace4cb3cbbd357eba6293bf53"
  },
  {
    "url": "assets/js/16.ea4c594e.js",
    "revision": "0bdf1e3ea1ce25631390183eee5a00e7"
  },
  {
    "url": "assets/js/17.94a33523.js",
    "revision": "cf9bb8745869921fcab563749a577f95"
  },
  {
    "url": "assets/js/18.1a739912.js",
    "revision": "09655be32ac4943438173fde63e94924"
  },
  {
    "url": "assets/js/19.188dddfd.js",
    "revision": "7951963c807b9a1002effbcba9909016"
  },
  {
    "url": "assets/js/2.3ed537a1.js",
    "revision": "908a9d9ae2ca8de7cdf6e8460c1f487c"
  },
  {
    "url": "assets/js/20.68e8f666.js",
    "revision": "784536e3236dd7356ed36007492333b4"
  },
  {
    "url": "assets/js/3.8309bc15.js",
    "revision": "6082e4c12eaba71e8d507d71e9631108"
  },
  {
    "url": "assets/js/4.bb7c6003.js",
    "revision": "8f9c99215b7b2fab02e810fc3b05087d"
  },
  {
    "url": "assets/js/5.27d7445f.js",
    "revision": "46bd01c81dd360380a302529fa6f00bb"
  },
  {
    "url": "assets/js/6.05fed661.js",
    "revision": "a2a2fec5ea8ec9bdd76ff25d8acd753d"
  },
  {
    "url": "assets/js/7.d2863b4f.js",
    "revision": "f1f0f9b85157b4175486d8451796d912"
  },
  {
    "url": "assets/js/8.89ae276e.js",
    "revision": "f70c220b1eacb2be90d9bb358643df4b"
  },
  {
    "url": "assets/js/9.8e169cd0.js",
    "revision": "c61084fadac388eb640e0a0b9b18def4"
  },
  {
    "url": "assets/js/app.23b591e3.js",
    "revision": "3bec8fdc24b539c431b196900930bb9a"
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
    "revision": "2d548755cfadc9a36371829bc34c5973"
  },
  {
    "url": "guide/config.html",
    "revision": "4fb442ce129a2481b34952a039e9e32a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6a05c4ead6d602f9ec4b1c31fb36a124"
  },
  {
    "url": "guide/index.html",
    "revision": "23d471fc0eb0365a3f573451b22cc511"
  },
  {
    "url": "guide/install.html",
    "revision": "8ced6aa42b1726bc42504c5def5feb23"
  },
  {
    "url": "guide/sys.html",
    "revision": "6020b508256a5791f013bda1ed73c8d0"
  },
  {
    "url": "guide/user.html",
    "revision": "9a6f187da22f61406b921f4dfeca3b60"
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
    "revision": "6b36e0a8ddabcdd1a17b758659b4f4ee"
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
