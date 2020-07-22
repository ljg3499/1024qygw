<template>
    <div class="detail_container"> 
         <mNewDetial v-if='!$pc'></mNewDetial>
       <pNewDetial v-if='$pc'></pNewDetial>
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
.detail_container{
    width:100%;
    height:100%;
}
</style>