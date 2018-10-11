const fs=require('fs');
const path=require('path');
const router = require('koa-router')();

const routers=router.get('/',(ctx, next) => {
    ctx.type = 'html';
    ctx.body = fs.createReadStream('../build/views/index.html');
});

module.exports=routers