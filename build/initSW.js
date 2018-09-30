let endpoint;
let key;
let authSecret;
// VAPID 规范要求密钥 base64转unit8数组
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function determineAppServerKey() {
  // 客户端和服务端需要的公钥 确保信息加密
  var vapidPublicKey = 'BAyb_WgaR0L0pODaR7wWkxJi__tWbM1MPBymyRDFEGjtDCWeRYS9EF7yGoCHLdHJi6hikYdg4MuYaK0XoD0qnoY';
  return urlBase64ToUint8Array(vapidPublicKey);
}

// 注册sw

window.addEventListener('load', function () {
  var savePrompt;
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      })
      .then(function (registration) {
        // 注册成功
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        var serviceWorker;
        if (registration.installing) {
          serviceWorker = registration.installing;
          console.log('Service worker installing');
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
          console.log('Service worker installed & waiting');
        } else if (registration.active) {
          serviceWorker = registration.active;
          console.log('Service worker active');
          return registration.pushManager.getSubscription()
            .then(function (subscription) {
              if (subscription) {
                // 已经注册
                return;
              }
              return registration.pushManager.subscribe({ // 沒有注册显示提示
                  userVisibleOnly: true,
                  applicationServerKey: determineAppServerKey()
                })
                .then(function (subscription) {
                  var rawKey = subscription.getKey ? subscription.getKey('p256dh') : ''; //从订阅对象获取密钥和authSecret
                  key = rawKey ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey))) : '';
                  var rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
                  authSecret = rawAuthSecret ?
                    btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret))) : '';
                  endpoint = subscription.endpoint;
                  return fetch('/sw/registerSW', { // 将详细信息发送给服务器以注册用户
                    method: 'post',
                    headers: new Headers({
                      'content-type': 'application/json'
                    }),
                    body: JSON.stringify({
                      endpoint: subscription.endpoint,
                      key: key,
                      authSecret: authSecret,
                    }),
                  })
                }).catch(err => {
                  console.log('my err')
                  console.log(err)
                });
            });
        }

        // 注册成功
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function (err) {
        // 注册失败
        console.log('ServiceWorker registration failed: ', err);
      });
  }
  // -- 推迟提示
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    savePrompt = e;
    return false;
  });
  // -- 安装app
  window.installApp = function () {
    if (savePrompt !== undefined) {
      savePrompt.userChoice.then((result) => {
        if (result.outcome == 'dismissed') {
          alert('已取消安装')
        } else {
          alert('应用已安装')
        }
        savePrompt = null
      })
    } else {
      console.log('未触发install事件')
    }
  }
});

// 取消订阅
window.unsubscribe = function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((ServiceWorkerRegistration) => {
        ServiceWorkerRegistration.pushManager.getSubscription()
          .then((subscription) => {
            if (!subscription) {
              console.log("未注册service worker");
              return;
            }
            subscription.unsubscribe()
              .then(() => {
                console.log("取消订阅成功！")
              })
              .catch((e) => {
                console.error('error', e)
              })
          })
      })
  }
}
