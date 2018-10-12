module.exports = {
    async syncMessage(data){
        try{
            let resData=`Message sent to ${data.name}`;
            return resData;
        }catch(err){
            console.log('Error',err)
        } 
    }
}