const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const webpush = require('web-push');
/* const cors = require('koa2-cors'); */
const static = require('koa-static'); 
const app = new Koa();


const routers = require('./routers/index');// 路由配置


// 设置VAPID详情 
webpush.setVapidDetails(
    'mailto:cht527@126.com',
    'BAyb_WgaR0L0pODaR7wWkxJi__tWbM1MPBymyRDFEGjtDCWeRYS9EF7yGoCHLdHJi6hikYdg4MuYaK0XoD0qnoY',
    'p6YVD7t8HkABoez1CvVJ5bl7BnEdKUu5bSyVjyxMBh0'
);


app.use(static(
    path.join( __dirname, '../build')
)); 

app.use(bodyParser());

app.use(routers.routes()).use(routers.allowedMethods()); // 启动路由. 官方文档的推荐用法,router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头

app.listen(3000,()=>{
    console.log('pwa demo starting at port 3000');
});
