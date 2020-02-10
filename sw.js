const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"reuixiy"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"a4e6008cafbe2d080167cd84dbeb4ef8",url:"./404.html"},{revision:"f2eae82cce19b1a008ca014d2efa54a2",url:"./about/index.html"},{revision:"af762f59a410e1a97a322129bdf74672",url:"./css/meme.min.f509473fd6608f7cd2bc405564820fd6017bb47ddf6cc289e1b3c90f1c2eb7c7.css"},{revision:"9b48ba7851f96c1f1cbf971db2bac96f",url:"./fonts/glyph-correction.woff2"},{revision:"e1c3cc4fec2921e5235b100564586c61",url:"./index.html"},{revision:"bb1000edfbe9eae23cbf4d5eeb84c6f0",url:"./js/meme.min.28a5d4816af314c49aa3cbde0f1fcf915fde38249ea2822037483dabeba1c680.js"},{revision:"54e7eb6ef76ca002887bede030e76e58",url:"./life/hello/index.html"},{revision:"f43ee3e344e2e9d284011f49421e504d",url:"./life/index.html"},{revision:"7135bf9b7b2369e7d18351040b2d0385",url:"./manifest.json"},{revision:"ee7a30edc87afde3256c9e532e9c8118",url:"./tags/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();