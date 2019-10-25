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
    "revision": "b75f56e0785addcea555e3efaf5e1b66"
  },
  {
    "url": "api/account.html",
    "revision": "ffa5fa7d16b319cef672326b7f8aaf18"
  },
  {
    "url": "api/data.html",
    "revision": "0286b2c57113d34245a2cdd601786b91"
  },
  {
    "url": "api/dept.html",
    "revision": "64a0f7d348f89d208fd34a6b1e906f61"
  },
  {
    "url": "api/domain.html",
    "revision": "7a38abfa1535cf3f70effdebaaaf2a44"
  },
  {
    "url": "api/index.html",
    "revision": "9cc08547c32d1e79dd2425bb59595931"
  },
  {
    "url": "api/menu.html",
    "revision": "9f6d731329e58a56288244c3bd182a8c"
  },
  {
    "url": "api/perm.html",
    "revision": "584b5741efdad415262a9a24696ad726"
  },
  {
    "url": "api/role.html",
    "revision": "b0c3373587870d30a7db40072741fd41"
  },
  {
    "url": "api/user.html",
    "revision": "0005a59f58c5c41a72ed4712efbe851e"
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
    "url": "assets/js/11.5f5a2e91.js",
    "revision": "f514e5e04ce31b842d83c494b6c95671"
  },
  {
    "url": "assets/js/12.9ad6d99a.js",
    "revision": "d56b52262f5f8528b67bae8809102ffe"
  },
  {
    "url": "assets/js/13.649192e7.js",
    "revision": "99fd40b1b4cbf9bc9d84bfbc4e238eec"
  },
  {
    "url": "assets/js/14.de7ce9dd.js",
    "revision": "133f334ca7160f8d70decb791efe7baf"
  },
  {
    "url": "assets/js/15.7ad2ec20.js",
    "revision": "1ff38d4ace4cb3cbbd357eba6293bf53"
  },
  {
    "url": "assets/js/16.f6a47285.js",
    "revision": "d7567dbc7d50bdbd088149839992b878"
  },
  {
    "url": "assets/js/17.e0b82a16.js",
    "revision": "5231aaaf8af5e7982fe6145d68fa95b6"
  },
  {
    "url": "assets/js/18.f91b52cf.js",
    "revision": "52d2a3220bc718fa540d5133189a56fb"
  },
  {
    "url": "assets/js/19.1b484bdf.js",
    "revision": "763f46585a7425f34d40bc0f2018a60e"
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
    "url": "assets/js/3.6f157c2f.js",
    "revision": "bac01ceafbf48ffa75b699126a3f84c7"
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
    "url": "assets/js/app.88200f76.js",
    "revision": "f013324c61b575dfb1c485aad082af3c"
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
    "revision": "940d047341b51b8815574a7fa566659d"
  },
  {
    "url": "guide/config.html",
    "revision": "e52d403c49d41fcbf5e539340695b982"
  },
  {
    "url": "guide/develop.html",
    "revision": "e40b5b2a6360a2f1db2c33ccb7a491c1"
  },
  {
    "url": "guide/index.html",
    "revision": "9493588a85ae1fd1422ae3265076dd58"
  },
  {
    "url": "guide/install.html",
    "revision": "d59e89b7946728d4d97385ba7f8f6169"
  },
  {
    "url": "guide/ldap.html",
    "revision": "3b036c3931648a3bf53512c1b3914fa3"
  },
  {
    "url": "guide/user.html",
    "revision": "2df8df87d01088e30a3bda26b7fab1c0"
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
    "revision": "99b8f1861684aa86401c8238644f6cdf"
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
