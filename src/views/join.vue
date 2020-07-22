<template>
  <div class="join_container">
      <mJoin v-if='!$pc'></mJoin>
       <pJoin v-if='$pc'></pJoin>
  
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
.join_container{
  width:100%;
  height:100%;
  
}
</style>
