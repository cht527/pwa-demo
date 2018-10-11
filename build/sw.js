let cacheName = "PWA_CACHE-v2";
const offlineUrl="/views/offlinePage.html";
const offlineJs="/offlinePage.js";
const offlineCss="/offlinePage.css";
self.addEventListener('install', event => {
  self.skipWaiting(); //触发 activate 事件，告知 Service Worker 立即开始工作
  event.waitUntil(
    caches
    .open(cacheName) // 打开缓存
    .then(cache => cache.addAll([
        '/manifest.json',
        '/views/index.html',
        offlineUrl,offlineJs,offlineCss,
        '/vendor.js', // 添加文件到缓存中
        '/vendor.css',
        '/index.js',
        '/index.css'
      ])
    )
  );
  //event.waitUntil()); //触发 activate 事件，告知 Service Worker 立即开始工作
});

// --- 接收通知
self.addEventListener('push', function (event) {

  var payload = event.data ? JSON.parse(event.data.text()) : 'no payload';

  var title = 'New notification';

  if (payload.type === 'register') {
    event.waitUntil(
      self.registration.showNotification(title, {
        body: payload.msg,
        url: payload.url,
        icon: payload.icon
      })
    );
  } else if (payload.type === 'actionMessage') {
    event.waitUntil(
      self.registration.showNotification(title, {
        body: payload.msg,
        icon: payload.icon,
        image:payload.image,
        actions: [{
            action: 'addPlan',
            title: '新建计划'
          },
          {
            action: 'planDetail',
            title: '计划详情'
          }
        ],
        vibrate:[500,200,400], // 添加震动模式，震动500ms 暂停200ms 震动400ms
      })
    );
  }
});

//---处理通知的单击事件
self.addEventListener('notificationclick', function (event) {
  if (!event.action) {
      // 没有点击在按钮上
      console.log('Notification Click.');
      return;
  }
  //console.log(JSON.stringify(event))
  //event.notification.close();// --- 单击通知标题就关闭
  console.log('Notification Click.');
  // 如果添加了action
  if (event.action === 'addPlan') {
    clients.openWindow('http://localhost:3000/views/addPlan.html');
  } else if (event.action === 'planDetail') {
    clients.openWindow('http://localhost:3000/views/planDetail.html');
  } else {
    clients.openWindow('http://localhost:3000/views/index.html');
  }
}, false);

// 确保更新立即生效
self.addEventListener('activate', function (event) {
  console.log('self active ')
  event.waitUntil(self.clients.claim());
});

// 监听 fetch 事件
self.addEventListener('fetch', event => {
  event.respondWith(
    caches
    .match(event.request, {
      ignoreSearch: true
    }) // 检查传入请求是否在缓存中有匹配, 忽略查询字符参数
    .then(response => { // 有的话就将其返回，否则通过正常网络请求获取
      if (response) {
        return response
      }
      let requestToCache = event.request.clone(); // 复制请求流
      if (requestToCache.method == 'GET') {
        return fetch(requestToCache).then(
          function (response) {
            if (!response || response.status !== 200) { // 请求失败返回错误信息
              return response;
            }
            let responseToCache = response.clone();

            caches.open(cacheName)
              .then((cache) => {
                cache.put(requestToCache, responseToCache); // 存储在缓存中，这样不会再次发起请求
              }, (err) => {
                console.log(err)
              });

            return response;
          }
        ).catch(error=>{
          if(event.request.method=="GET" && event.request.headers.get('accept').includes('text/html')){
            return caches.match(offlineUrl)
          }
          
        })
      } else if (requestToCache.method == "POST") {
        return fetch(requestToCache).then((response) => {
          if (!response || response.status !== 200) { // 请求失败返回错误信息
            return response;
          }
          return response
        })
      }


    })
  );
});
