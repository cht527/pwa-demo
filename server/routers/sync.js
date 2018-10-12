const router = require('koa-router')();
const controller = require('./controller');

const routers=router.post('/syncMessage',controller.syncMessage)


module.exports=routers