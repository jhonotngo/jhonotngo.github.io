'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a6ed119cc80c1e8b9e172afe51071bf2",
"/": "a6ed119cc80c1e8b9e172afe51071bf2",
"main.dart.js": "7ce250be159b9baf5bb73f32d7c6b203",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "83865ec2d6262bfe9975f009e7ae41df",
"assets/AssetManifest.json": "a11e3abc24a1316328c385935f9941eb",
"assets/NOTICES": "01cdd084e13eed0a449fecf148f3b84c",
"assets/FontManifest.json": "edc3c80f19b393025695c22331057de0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/svg/lauft_logo.svg": "155f51628b610ee9f14b171782658063",
"assets/assets/svg/onboard_screen_3.svg": "edfa7b90a7814d8a9fc20b4578db6843",
"assets/assets/svg/onboard_screen_2.svg": "6c01c1a191b67376307a9b5110b80bdf",
"assets/assets/svg/onboard_screen_1.svg": "b98cbc6b1d019bdca5048b2c1174ae88",
"assets/assets/images/lauft_logo.png": "d479c1cf25ec930096df498a0c61704c",
"assets/assets/images/onboarding1.png": "93e3de9e26d27f2d930cdce8f1eb3a43",
"assets/assets/images/onboarding3.png": "108b8c6c5612adcf6a7a99e0e00027a6",
"assets/assets/images/onboarding2.png": "3fc0deef7ec54ddde094da27879c358c",
"assets/assets/images/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/assets/images/2.0x/lauft_logo.png": "e475641a05d4146bcccd7225c234ed9b",
"assets/assets/images/2.0x/onboarding1.png": "93e3de9e26d27f2d930cdce8f1eb3a43",
"assets/assets/images/2.0x/onboarding3.png": "108b8c6c5612adcf6a7a99e0e00027a6",
"assets/assets/images/2.0x/onboarding2.png": "3fc0deef7ec54ddde094da27879c358c",
"assets/assets/images/2.0x/makesmartwork_white.png": "9ba6eca889ed1299fdabfcacfeb0f2d5",
"assets/assets/images/2.0x/lauft_reverse_logo.png": "2318445bc8fc38d9f3ce18e8209ab740",
"assets/assets/images/2.0x/lauft_location.png": "857a58941365905c59d0216fdbf4607d",
"assets/assets/images/2.0x/refer.png": "02d553bc2ce10e8dfef9f5a407f57e45",
"assets/assets/images/2.0x/map_pin.png": "03ed3fe6ad5bb18b31bc6c087cb71b80",
"assets/assets/images/2.0x/makesmartwork_black.png": "9490d3c21110760a9b8231f042d40462",
"assets/assets/images/locationBackground.png": "74795aee12ad255478219bccfade4dd9",
"assets/assets/images/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/assets/images/3.0x/lauft_logo.png": "e475641a05d4146bcccd7225c234ed9b",
"assets/assets/images/3.0x/onboarding1.png": "93e3de9e26d27f2d930cdce8f1eb3a43",
"assets/assets/images/3.0x/onboarding3.png": "108b8c6c5612adcf6a7a99e0e00027a6",
"assets/assets/images/3.0x/onboarding2.png": "3fc0deef7ec54ddde094da27879c358c",
"assets/assets/images/3.0x/makesmartwork_white.png": "9ba6eca889ed1299fdabfcacfeb0f2d5",
"assets/assets/images/3.0x/lauft_reverse_logo.png": "2318445bc8fc38d9f3ce18e8209ab740",
"assets/assets/images/3.0x/lauft_location.png": "857a58941365905c59d0216fdbf4607d",
"assets/assets/images/3.0x/refer.png": "02d553bc2ce10e8dfef9f5a407f57e45",
"assets/assets/images/3.0x/map_pin.png": "259d04d888571d8eb87e9a53d8d7855f",
"assets/assets/images/3.0x/makesmartwork_black.png": "9490d3c21110760a9b8231f042d40462",
"assets/assets/images/makesmartwork_white.png": "170d4ae2bee3102f8084239cccab5b50",
"assets/assets/images/card-back.png": "27d3bf28cfa8b36d1ad615d53c8bf9ae",
"assets/assets/images/lauft_reverse_logo.png": "5dc3590f56099eb2932b3243df0e817c",
"assets/assets/images/lauft_location.png": "857a58941365905c59d0216fdbf4607d",
"assets/assets/images/refer.png": "02d553bc2ce10e8dfef9f5a407f57e45",
"assets/assets/images/map_pin.png": "511fbf0072cc7d8760d7e219d3965afc",
"assets/assets/images/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/assets/images/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/assets/images/makesmartwork_black.png": "98ca5971a6182b659bc9773948d977ca",
"assets/assets/lang/en.json": "fabc56040da7b7c257698ba1c0079e73",
"assets/assets/lang/fr.json": "31f4ae1521793c79bee8c4380607d5bc",
"assets/assets/lang/es.json": "ac89dac12d85833effde3c29232e3f90",
"assets/assets/files/privacy_policy.md": "9ea7dbf00f36ba8f490f22ce0127619f",
"assets/assets/files/guidelines.md": "221090cdeda801b4f110235bd56b6ff4",
"assets/assets/files/faq.md": "a55798855e4e08ece40e9e00530fca4d",
"assets/assets/files/terms.md": "f123690d381b4c9f963187145d8eda43",
"assets/assets/fonts/Lato-Italic.ttf": "7582e823ef0d702969ea0cce9afb326d",
"assets/assets/fonts/Lato-LightItalic.ttf": "4d80ac573c53d192dafd99fdd6aa01e9",
"assets/assets/fonts/Lato-Thin.ttf": "9a77fbaa85fa42b73e3b96399daf49c5",
"assets/assets/fonts/lauft_icons.ttf": "4f3bf2314b34c124adda9a72fbceffbb",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Lato-Black.ttf": "e631d2735799aa943d93d301abf423d2",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/Lato-BlackItalic.ttf": "2e26a9163cb4974dcba1bea5107d4492",
"assets/assets/fonts/OFL.txt": "99aa8fee7ed71044ae773b92d79ab24c",
"assets/assets/fonts/Lato-BoldItalic.ttf": "f98d18040a766b7bc4884b8fcc154550",
"assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"assets/assets/fonts/Lato-ThinItalic.ttf": "4ac7208bbe0e3593ce9464f013607751"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
