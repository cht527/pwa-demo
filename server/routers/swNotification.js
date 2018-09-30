const router = require('koa-router')();
const controller = require('./controller');

const routers=router.post('/registerSW',controller.registerSW)
                    .post('/sendMessage',controller.sendMessage)


module.exports=routers