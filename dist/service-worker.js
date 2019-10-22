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
    "revision": "aefcb42f8ffb5ee01c97f4dc4ed73066"
  },
  {
    "url": "api/account.html",
    "revision": "e306076e92ff709b01163b8c83726842"
  },
  {
    "url": "api/data.html",
    "revision": "5b5b865bc192a00520f7cdc9b7f33b1b"
  },
  {
    "url": "api/dept.html",
    "revision": "40c167ad11c38f8f203b000bf9f94378"
  },
  {
    "url": "api/domain.html",
    "revision": "be5492594212ab620f9fd2c21df2150d"
  },
  {
    "url": "api/index.html",
    "revision": "963f7b6a7632d9b293f3d9859f44578a"
  },
  {
    "url": "api/menu.html",
    "revision": "7088e16e5a70af20d1a068bf104103f9"
  },
  {
    "url": "api/perm.html",
    "revision": "1045bcbde9cab1b2dd6664133b55f878"
  },
  {
    "url": "api/role.html",
    "revision": "690c4e288ebd8a97c11f8b3a6d6de28f"
  },
  {
    "url": "api/user.html",
    "revision": "b4ee26139fa4ba061327446db3fb8c4a"
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
    "url": "assets/js/10.2af089d7.js",
    "revision": "f7e85e0b27d5c1459bbe5071231d200e"
  },
  {
    "url": "assets/js/11.6db4347c.js",
    "revision": "d9f4175e06f813ad0041cef5607f7261"
  },
  {
    "url": "assets/js/12.423c297f.js",
    "revision": "73508beddde0c1571e6166e68ac42edd"
  },
  {
    "url": "assets/js/13.f4d68261.js",
    "revision": "9e01498c7acf34d5242ab24a7a6c05cb"
  },
  {
    "url": "assets/js/14.307f9e72.js",
    "revision": "6a99e51fe92699edcc86686a5a72a33d"
  },
  {
    "url": "assets/js/15.c8b50545.js",
    "revision": "b651c0e2f4b7ca3683734dc9e53313b2"
  },
  {
    "url": "assets/js/16.68d1a0c5.js",
    "revision": "6a78cd4cd0cd1c7e854c90b0a1709945"
  },
  {
    "url": "assets/js/17.c3ba1a1b.js",
    "revision": "d2dfaa5229a8e536a3700cd753c9f374"
  },
  {
    "url": "assets/js/18.ca49cdcc.js",
    "revision": "307ec2934d261b639992ae8ffe18e28f"
  },
  {
    "url": "assets/js/19.05524114.js",
    "revision": "192ba6e523e5236166192d378364af79"
  },
  {
    "url": "assets/js/2.2331505c.js",
    "revision": "db1b1b3d6d3f97449f52a9f01be3449c"
  },
  {
    "url": "assets/js/20.d68b916c.js",
    "revision": "37174a96e1b0b4e93ab01cdb3fa22e82"
  },
  {
    "url": "assets/js/21.2b1c9f0f.js",
    "revision": "04278248f0832c546433121d10cc1f47"
  },
  {
    "url": "assets/js/22.e7497b59.js",
    "revision": "04f7ce9213111e2881814f4157e1976b"
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
    "url": "assets/js/5.983d59a1.js",
    "revision": "c7b488ee092bf106744b99f03d2bd113"
  },
  {
    "url": "assets/js/6.6ef826bd.js",
    "revision": "19b3bd723aef5afc57592464dcd4351c"
  },
  {
    "url": "assets/js/7.d7073d58.js",
    "revision": "7d1a49732c3827b6046cc61b87b0c885"
  },
  {
    "url": "assets/js/8.3062e01f.js",
    "revision": "db93564be2201ddb7c5b70bf9ffe3c67"
  },
  {
    "url": "assets/js/9.b9b5913b.js",
    "revision": "ab5e4e11c6c6d1ba2c51f8ece1a13b2f"
  },
  {
    "url": "assets/js/app.de402218.js",
    "revision": "50bc1b6544df8a94a3d8a963e87cc48f"
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
    "revision": "c34cf88f6259786404711504152ad2b4"
  },
  {
    "url": "guide/config.html",
    "revision": "2f6fffb2868a68b979a9ccca0239744d"
  },
  {
    "url": "guide/develop.html",
    "revision": "bc9c0f1d9a3299a69b7cddff91ef8afc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "031345ecadb50878f36c202ef6f2445a"
  },
  {
    "url": "guide/index.html",
    "revision": "070d824b8151310fcbb0873dd7b50b54"
  },
  {
    "url": "guide/install.html",
    "revision": "3a8ac9d92863f86cd2ce889ebea15f1c"
  },
  {
    "url": "guide/ldap.html",
    "revision": "9c782d10dd2f1d5ea7ba299234a48af3"
  },
  {
    "url": "guide/sys.html",
    "revision": "70859ebcddc20050eb72ea2ac0e689e5"
  },
  {
    "url": "guide/user.html",
    "revision": "e904591c17101a03d55e02673b4a0f58"
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
    "revision": "dd1460360925ccd0b885cfb73b5fcc58"
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
