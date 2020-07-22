<template>
  <div class="home">
      <mHome v-if='!$pc'></mHome>
      <pHome v-else></pHome>
  
  </div>
</template>

<script>
export default {
  
   data(){
     return{

     }
   }
}
</script>
<style lang="less" scoped>
.home{
  width:100%;
  height:100%;
}
</style>
