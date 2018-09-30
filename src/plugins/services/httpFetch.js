
class Fetch{
    constructor(){
        this.defaultOptions={
            credentials: 'include',
            mode: 'cors'
        };
        this.timeout=3000;
    }
    async get(url,params){
        const newOptions = { ...this.defaultOptions, method:'GET' };
        let newUrl=(params&&Object.keys(params).length>1)?`${url}?${this.parseParams(params)}`:url;
        let res= await Promise.race([fetch(newUrl, newOptions), this.timeoutPromise()]);
        let resAfterCheck= await this.checkStatus(res);
        return await resAfterCheck.json()
    }
    async postForm(url,params){
        let newParams=this.parseParams(params);
        const newOptions = { ...this.defaultOptions, body:newParams,method:'POST' };

        newOptions.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            ...newOptions.headers,
        };
        let res= await Promise.race([fetch(url, newOptions), this.timeoutPromise()]);
        let resAfterCheck= await this.checkStatus(res);
        return await resAfterCheck.json()
        
    }
    async postJson(url,params){
        let newParams=JSON.stringify(params);
        const newOptions = { ...this.defaultOptions, body:newParams,method:'POST' };
        newOptions.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            ...newOptions.headers,
        };
        let res= await Promise.race([fetch(url, newOptions), this.timeoutPromise()]);
        let resAfterCheck= await this.checkStatus(res);
        return await resAfterCheck.json()
    }
    timeoutPromise(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                 reject(new Error("fetch timeout"))
            }, this.timeout)
        })
    } 
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response
        } else {
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
    }
    parseParams(params){
        let paramsArray = [];
        if(typeof(params)==='object'){
            Object.keys(params).forEach(key =>{
                if(params[key] instanceof Array){
                    params[key] = '[' +params[key]+ ']';
                }
                paramsArray.push(key + '=' + params[key])
            });
            return paramsArray.join('&');
        }
    }
}
export default new Fetch()