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

      var body = '欢迎注册58fang SW';
      var iconUrl = 'https://pwa.oss-cn-beijing.aliyuncs.com/=98765431``44.png';

      webpush.sendNotification(pushSubscription,
          JSON.stringify({
            msg: body,
            url: 'https://10.252.62.116:3000/views/index.html',
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

      var body = '号外: 要涨工资了！';
      var iconUrl = 'https://pwa.oss-cn-beijing.aliyuncs.com/144.png';

      webpush.sendNotification(pushSubscription,
          JSON.stringify({
            msg: body,
            url: 'http://localhost:3000/views/index.html',
            icon: iconUrl,
            type: 'actionMessage'
          }))
        .then(result => {
          console.log(result);
          res.sendStatus(201);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {
      console.log('Error', err)
    }
  }


}
