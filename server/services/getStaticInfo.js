const fs = require('fs'); //文件模块
const util = require('util');
const readFile = util.promisify(fs.readFile);
const path= require('path');
module.exports={
    async getCateList(data){
        try{
            let file = path.join(__dirname, '../../mock/api_cate_list.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async getSubregionVppvRank(data){
        try{
            let file = path.join(__dirname, '../../mock/api_get_subregion_vppvrank.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async getPromotionAndHouseKeeperInfo(data){
        try{
            let file = path.join(__dirname, '../../mock/api_get_promotion_and_house_keeper_info.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async getMainBusiness(data){
        try{
            let file = path.join(__dirname, '../../mock/api_get_main_business.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async getCityList(data){
        try{
            let file = path.join(__dirname, '../../mock/api_get_city_list.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async getAreaList(data){
        try{
            let file = path.join(__dirname, '../../mock/api_get_area_list.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async getBusList(data){
        try{
            let file = path.join(__dirname, '../../mock/api_get_business_list.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },
    async saveMainBusiness(data){
        try{
            let file = path.join(__dirname, '../../mock/api_save_main_business.json');
            let resultData = await readFile(file, 'utf-8');
            return resultData;
        }catch(err){
            console.log('Error',err)
        } 
    },

}
