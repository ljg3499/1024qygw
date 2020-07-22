<template>
  <div class="new">
      <mNewList v-if='!$pc'></mNewList>
      <pNewList v-else></pNewList>
  
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
.new{
  width:100%;
  height:100%;
}
</style>
