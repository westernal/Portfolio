if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let n={};const d=e=>s(e,r),f={module:{uri:r},exports:n,require:d};a[r]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(c(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Ali Navidi Resume.pdf",revision:"24167c1d0b210134a9f631cb3dc3a36c"},{url:"/Images/1679506950613.jfif",revision:"235c425e2527a3d5cee3639d9fad5a4c"},{url:"/Images/1684220729246.jfif",revision:"12c3d130753a24e60bdbc240f143989f"},{url:"/Images/32dc9e08-9167-4792-b7a1-119df97022e4.svg",revision:"a1424740ae0de039d2ccab01a6278611"},{url:"/Images/5279C0FE-F244-4B54-B9C6-BB18F7D07078_iphone13blue_portrait.png",revision:"81cbd162c109c0d5dbba15d2f912eda9"},{url:"/Images/A05D135D-6A5D-4210-AFB3-C35D4F73284F_iphone13red_portrait.png",revision:"0d2a994cc0fe7b88d1eae83265fd3179"},{url:"/Images/Angular-Dark.svg",revision:"a3da877157881dd29dac922782b3e210"},{url:"/Images/DB43DA89_2874_487D_A50A_CBE7E281960F_iphone13starlight_portrait.png",revision:"88ae7356be7272b77be7f4e917cd644c"},{url:"/Images/Django.svg",revision:"fa3927f0961d19dc962c88aba7baa004"},{url:"/Images/Docs.svg",revision:"07467524e7bc5a328a2de166c966317d"},{url:"/Images/NextJS-Dark.svg",revision:"0393d90cc56a5b023ad02a280f99d633"},{url:"/Images/PostgreSQL-Dark.svg",revision:"29f64fa501e5aabd5c4b2008ba9f4a81"},{url:"/Images/Redux.svg",revision:"6d646e9d235fcb558e54f6ce3e70f251"},{url:"/Images/SB-silver.png",revision:"aaa3b01fbacc196d4704cb121edbdfb3"},{url:"/Images/SB-silver.svg",revision:"7304b140ae9f13f61db4f88b5070a67c"},{url:"/Images/Sticker-1-05 1.png",revision:"809325f358f8fe06f0e0d0c9a6211264"},{url:"/Images/Svelte.svg",revision:"7a0d3b27855c4b9f80dd20e1496834a6"},{url:"/Images/Website.svg",revision:"5a281d72c24749057788a0411d5664c8"},{url:"/Images/android-chrome-192x192.png",revision:"332f349cca10c25e47988e1ba3daf1c1"},{url:"/Images/android-chrome-512x512.png",revision:"e6baf76cfc679a87b95053af4a33af01"},{url:"/Images/apple-touch-icon.png",revision:"bf26dd09e2359e2cd904788451058173"},{url:"/Images/bootstrap.svg",revision:"3fbbe3bfc5e5681fd7d2cda8d4226e5f"},{url:"/Images/c.svg",revision:"5aa100485b2a9e05ae5e50062966c5f6"},{url:"/Images/cinema-web.png",revision:"d09162143325d756236b63209c2dbabd"},{url:"/Images/css3.svg",revision:"cba9c66ef8d52f5ef85fc6701845a21e"},{url:"/Images/cypress.svg",revision:"07b93441c2d791cec210102f5796171e"},{url:"/Images/dashboard-web.png",revision:"0a8f54ebda67b723517bb60778d9ba29"},{url:"/Images/dev-to-svgrepo-com.svg",revision:"20dcb403faf701f00b92803860360539"},{url:"/Images/email.svg",revision:"91efa9f433c34ec5775232282681105f"},{url:"/Images/express.svg",revision:"68e064a6f7baaee97af964342ab15b97"},{url:"/Images/favicon-16x16.png",revision:"554304a327d3d82f8a6323f29ca0eed2"},{url:"/Images/favicon-32x32.png",revision:"79acff793a476f4ce150796129357ff9"},{url:"/Images/favicon.ico",revision:"442373120753136485d1d7d222847f90"},{url:"/Images/github.svg",revision:"820fff2fafc6b6299cbde8b6ac86df1e"},{url:"/Images/graphql.svg",revision:"9d1a63865b4019a5e2596746bf1dbe67"},{url:"/Images/html5.svg",revision:"48ce79c640714aaf5a11d800aae3adc4"},{url:"/Images/instagram.svg",revision:"c4bb8684bc140e2286ddcaa9aa62e735"},{url:"/Images/java.svg",revision:"cf4cd41d5b1f345fe99c2c05d0b99168"},{url:"/Images/javascript.svg",revision:"974b9bacb64ac5dc80cfec9791740f39"},{url:"/Images/jest.svg",revision:"f4863e2d3f302aae45477611d4656437"},{url:"/Images/like-svgrepo-com.svg",revision:"8d0841dc758a0eaa86dd432ea221ca01"},{url:"/Images/linkedin.svg",revision:"ebbe1054acca590dca92dff205d58968"},{url:"/Images/logo.svg",revision:"14eea2a1c4663ce5b5b03b8f02456c53"},{url:"/Images/mongodb.svg",revision:"9da90a3050d799b00d76b2f869876e3b"},{url:"/Images/mstile-150x150.png",revision:"1b3d77c36742242a46e3167f3a1142ad"},{url:"/Images/node-js.svg",revision:"6f7d253a263166725233f6272f1eb64c"},{url:"/Images/pngwing.com.png",revision:"959a684bc73be9163281a90a2a76161e"},{url:"/Images/python.svg",revision:"a657dfc68d4e66734ad3a4812ca5ef9c"},{url:"/Images/react.svg",revision:"0db67494a255bc34511446da2840a098"},{url:"/Images/remix-seeklogo.com.svg",revision:"7831e49121a9f842c9975d1cc9e6d895"},{url:"/Images/right arrow.svg",revision:"1f4a7fbdc5c161885433dae5729fd5dd"},{url:"/Images/sartel-web.png",revision:"fc1b3a5680e759553374e6bdd505f7c8"},{url:"/Images/screenshot-rocks (1).svg",revision:"c044b3e053934d447ddf0ae8810c0b7d"},{url:"/Images/screenshot-rocks (2).png",revision:"50be0f74b8ef1ee5f0e133b599e2bb93"},{url:"/Images/screenshot-rocks (3).svg",revision:"42a6284b1eea4916ce94df1c5a8d3753"},{url:"/Images/screenshot-rocks.svg",revision:"2c7e8f89d40595e30c8d1feb8a61a3b9"},{url:"/Images/server.svg",revision:"b2b790fec6b1b4960bc7e9ccf8d9e5ab"},{url:"/Images/stack-overflow.png",revision:"009f840e67626c7913adefbd63b12641"},{url:"/Images/stackoverflow.svg",revision:"fd85be175ea53aeee5af39fe2351c6be"},{url:"/Images/stars.svg",revision:"c3be6864fbc43d736196313fbf6ba062"},{url:"/Images/tailwind-svgrepo-com.svg",revision:"cf01a0cc485710c3c0f5faede49179f7"},{url:"/Images/telegram.svg",revision:"8faf8c2978f3cf82de54ccc76e3cc5cf"},{url:"/Images/tic-tac-toe.png",revision:"3406826c29e633dcb8a87f326cc53533"},{url:"/Images/twitter.svg",revision:"1f7cae0b28ece57ca0435a1fc9437d0b"},{url:"/Images/typescript.svg",revision:"7c9be75ff80941354ad20e1e16813cf3"},{url:"/Images/unnamed.jpg",revision:"1b63f8f100605990ff2637b3f9c3ea30"},{url:"/Images/unnamed2.jpg",revision:"5e1599adbc4f5dda41dbc88764a41e6c"},{url:"/Images/webpack.svg",revision:"6e0cc0cf13d20edaa2dd701569e76117"},{url:"/Images/westernal-web.png",revision:"aefa2e3e0a122fae175f81ad2ea84b08"},{url:"/Images/westernal-web.svg",revision:"c70a34003dc5e93e3348dea3acf59312"},{url:"/Images/whatsapp.svg",revision:"9eb75f429358a044d169903aa2eda80d"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-7581fa843ab211b5.js",revision:"7581fa843ab211b5"},{url:"/_next/static/chunks/pages/404-55dcee7d6ef62a39.js",revision:"55dcee7d6ef62a39"},{url:"/_next/static/chunks/pages/_app-b8cc3afd6eb638d1.js",revision:"b8cc3afd6eb638d1"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/index-a15f827f69b1681d.js",revision:"a15f827f69b1681d"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/8631ca438f746e41.css",revision:"8631ca438f746e41"},{url:"/_next/static/lihXpT7FF0oxWX_K_Rs-Q/_buildManifest.js",revision:"f937bbfcc5b8302a0ab13cd4b3a3d907"},{url:"/_next/static/lihXpT7FF0oxWX_K_Rs-Q/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/45f5089fd2655ea0-s.p.woff2",revision:"361d01f880221cc67b34c0eae6e674fb"},{url:"/_next/static/media/dd7c4990ef955611-s.p.woff2",revision:"37f01b6d93e25af206e1c903bf90d930"},{url:"/_next/static/media/e0a1f5513cdb8041-s.woff2",revision:"cf32deced134487b1f0e56efd912aa3b"},{url:"/_next/static/media/e900dfcfc4286944-s.woff2",revision:"9fb01d27c533129d16919d59e4890ee3"},{url:"/_next/static/media/ec385c3c2a1be85f-s.woff2",revision:"86843e2e035a3e366e7534d66b9b8ee7"},{url:"/_next/static/media/f70f837de0eecc82-s.woff2",revision:"304a7c1cf54343c3026786880706ac3f"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon.ico",revision:"442373120753136485d1d7d222847f90"},{url:"/manifest.json",revision:"20ff5df34006568cbcf968ec98cf932c"},{url:"/safari-pinned-tab.svg",revision:"86722d8068e6d09a7fb04bc26f4bd85a"},{url:"/site.webmanifest",revision:"32b2c3dced42d809f7aa5caa21fa9928"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
