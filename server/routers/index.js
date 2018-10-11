const router= require('koa-router')()
const main=require('./main');
const api = require('./api')
const swNotification=require('./swNotification');

router.use('/',main.routes(),main.allowedMethods())
router.use('/intelligentapp', api.routes(), api.allowedMethods())
router.use('/sw',swNotification.routes(),swNotification.allowedMethods())

module.exports = router