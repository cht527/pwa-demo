const router = require('koa-router')();
const controller = require('./controller');

/* const router= new Router({
    prefix: '/intelligentapp'
}); */

const routers=router
    .get('/getCateList',controller.getCateList) // 获取tab列表 

    .post('/getSubregionVppvRank',controller.getSubregionVppvRank)  // 获取排名

    .post('/getPromotionAndHouseKeeperInfo',controller.getPromotionAndHouseKeeperInfo) //获取推广管家信息

    .post('/getMainBusiness',controller.getMainBusiness) //获取主营商圈信息

    .post('/getCityList',controller.getCityList) // 获取城市列表

    .post('/getAreaList',controller.getAreaList) //获取区域列表

    .post('/getBusList',controller.getBusList) //获取商圈列表

    .post('/saveMainBusiness',controller.saveMainBusiness) //保存商圈信息 */

module.exports=routers
