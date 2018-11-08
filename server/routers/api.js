const router = require('koa-router')();
const controller = require('./controller');

/* const router= new Router({
    prefix: '/intelligentapp'
}); */

const routers=router
    .get('/getCateList',controller.getCateList) // 获取tab列表 

    .get('/getSubregionVppvRank',controller.getSubregionVppvRank)  // 获取排名

    .get('/getPromotionAndHouseKeeperInfo',controller.getPromotionAndHouseKeeperInfo) //获取推广管家信息

    .get('/getMainBusiness',controller.getMainBusiness) //获取主营商圈信息

    .get('/getCityList',controller.getCityList) // 获取城市列表

    .get('/getAreaList',controller.getAreaList) //获取区域列表

    .get('/getBusList',controller.getBusList) //获取商圈列表

    .get('/saveMainBusiness',controller.saveMainBusiness) //保存商圈信息 */

module.exports=routers
