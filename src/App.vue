<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return{

    }
  },
  watch: {
    // $route: function(to, from) {
    //   alert(1)
    //   if (to.name.indexOf("_p") > 0 && !this.$pc) {
    //     this.$router.replace(to.name.split("_p")[0]);
    //   } else if (to.name.indexOf("_p") < 0 && this.$pc) {
    //     this.$router.replace(to.name + "_p");
    //   }
    // }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
