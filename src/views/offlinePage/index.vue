
<template>
  <div class="offline-container">
    <h1 class="title">{{title}}</h1> 
    <img class="offline-icon" src="../../assets/imgs/offline.png" alt="离线图标" />
    <p><span>当前已处于离线状态！</span></p>
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      title:"offline"
    }
  },

  methods: {
         
  }
}
</script>

<style rel="stylesheet/less" lang="less">
.title{text-align: center}
 .offline-container{
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center
        }
        .offline-container p{
            font-size: 28px;
        }
        .offline-container p span{
            font-size: 36px;
            color:#f0610f
        }
</style>