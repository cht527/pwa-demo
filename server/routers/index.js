const router= require('koa-router')()
const api = require('./api')
const swNotification=require('./swNotification');

router.use('/intelligentapp', api.routes(), api.allowedMethods())
router.use('/sw',swNotification.routes(),swNotification.allowedMethods())

module.exports = router