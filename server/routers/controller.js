const path = require('path'); 
const serviceApi=require('../services/getStaticInfo');
const swNotification=require('../services/swNotification');

module.exports={
    // api 请求
    async getCateList(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getCateList(req);
        ctx.body=res;
    },
    async getSubregionVppvRank(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getSubregionVppvRank(req);
        ctx.body=res;
    },
    async getPromotionAndHouseKeeperInfo(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getPromotionAndHouseKeeperInfo(req);
        ctx.body=res;
    },
    async getMainBusiness(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getMainBusiness(req);
        ctx.body=res;
    },
    async getCityList(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getCityList(req);
        ctx.body=res;
    },
    async getAreaList(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getAreaList(req);
        ctx.body=res;
    },
    async getBusList(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.getBusList(req);
        ctx.body=res;
    },
    async saveMainBusiness(ctx){
        let req=ctx.request.body;
        let res=await serviceApi.saveMainBusiness(req);
        ctx.body=res;
    },
    // 注册sw 订阅
    async registerSW(ctx){
        //console.log(ctx.request.body);
        let req=ctx.request.body;
        let res=await swNotification.registerSW(req);
        ctx.status=201
    },
    async sendMessage(ctx){
        let req=ctx.request.body;
        let res=await swNotification.sendMessage(req);
        ctx.status=201
    },
    
}