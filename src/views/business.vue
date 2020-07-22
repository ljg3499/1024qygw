<template>
    <div class="business_container">
            <mBusiness v-if='!$pc'></mBusiness>
      <pBusiness v-else></pBusiness>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped> 
.business_container{
    width:100%;
    height:100%;
}
</style>