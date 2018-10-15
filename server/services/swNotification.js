const webpush = require('web-push');

function saveRegistrationDetails(endpoint, key, authSecret) {
  // 保存信息
  console.log(`endpoint:${endpoint}`);
  console.log(`key:${key}`);
  console.log(`authSecret:${authSecret}`);

}
module.exports = {

  async registerSW(req) {

    try {
      let endPoint = req.endpoint;
      let key = req.key;
      let authSecret = req.authSecret;

      // 保存信息
      saveRegistrationDetails(endPoint, key, authSecret);

      const pushSubscription = {
        endpoint: endPoint,
        keys: {
          auth: authSecret,
          p256dh: key
        }
      };

      var body = '欢迎注册58fang PWA';
      var iconUrl = 'https://pwa.oss-cn-beijing.aliyuncs.com/144.png';

      webpush.sendNotification(pushSubscription,
          JSON.stringify({
            msg: body,
            url: 'http://localhost:3000/views/index.html',
            icon: iconUrl,
            type: 'register'
          })
        )
        .then(result => {
          console.log(`sendNotification-result`);
          console.log(result);
          
          return result
        }).catch(err => {
          console.log('error');
          console.log(err);
        });

    } catch (err) {
      console.log('Error', err)
    }
  },
  // Send a message
  async sendMessage(req) {
    try {
      let endpoint = req.endpoint;
      let authSecret = req.authSecret;
      let key = req.key;

      const pushSubscription = {
        endpoint: req.endpoint,
        keys: {
          auth: authSecret,
          p256dh: key
        }
      };

      let messageList=['本消息来自新建计划','号外: 要发工资了','中国的房地产要崩盘了！']

      var body = messageList[Math.floor(Math.random()*3)];
      var iconUrl = 'https://pwa.oss-cn-beijing.aliyuncs.com/144.png';
      var image='https://blog-vue.oss-cn-beijing.aliyuncs.com/face/ziya.gif';

      webpush.sendNotification(pushSubscription,
          JSON.stringify({
            msg: body,
            icon: iconUrl,
            image:image,
            type: 'actionMessage'
          }))
        .then(result => {
          console.log(result);
          return result
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log('Error', err)
    }
  }


}
