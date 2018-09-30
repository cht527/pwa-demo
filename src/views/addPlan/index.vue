
<template>
  <div>
    <h1 class="title">{{title}}</h1> 
    <sticky-btn @handleClick="handleSub" class="optimization-btn" >推送消息</sticky-btn>
  </div>
</template>

<script>
import StickyBtn from '../../components/sticky-footer-btn/index';

export default {
  
  data () {
    return {
      title:"新建计划"
    }
  },

  methods: {
         handleSub(){
           window.subInfo()
         }
  },
  components: {
      StickyBtn
  },
}
</script>

<style rel="stylesheet/less" lang="less">
.title{text-align: center}

</style>