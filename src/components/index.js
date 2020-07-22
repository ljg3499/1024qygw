import Vue from "vue";
let _comp = {
  mNewList:require("./mobile/newList.vue"),
  pNewList:require("./pc/newList.vue"),
  mHome:require("./mobile/home.vue"),
  pHome:require("./pc/home.vue"),
  pBusiness:require("./pc/p-business.vue"),
  mBusiness:require("./mobile/m-business.vue"),
  pJoin:require("./pc/p-join.vue"),
  mJoin:require("./mobile/m-join.vue"),
  pAbout:require("./pc/p-about.vue"),
  mAbout:require("./mobile/m-about.vue"),
  pNewDetial:require("./pc/p-newDetial.vue"),
  mNewDetial:require("./mobile/m-newDetail.vue"),
 
};
for (let c in _comp) {
  Vue.component(c, _comp[c].default);
}
// Object.keys(_comp).forEach(i => Vue.component(i, _comp[i].default));
