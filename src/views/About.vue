<template>
  <div class="add_container">
      <mAbout v-if='!$pc'></mAbout>
      <pAbout v-else></pAbout>
  
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
.add_container{
  width:100%;
  height:100%;
}
</style>