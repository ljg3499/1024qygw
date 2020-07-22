import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './components'
import {Pagination,Carousel,CarouselItem,  Tabs,
  TabPane,  Form,Input,FormItem,Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "../src/style/public.css"
import Vant from 'vant';
import 'vant/lib/index.css';

import './vue_touch'
import 'babel-polyfill';


import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

import Carousel3d from 'vue-carousel-3d';

import MetaInfo from 'vue-meta-info';

Vue.use(Pagination);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(VueAwesomeSwiper);
Vue.use(MetaInfo);
Vue.use(Carousel3d);
Vue.config.productionTip = false
if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  Vue.prototype.$pc = false

} else {
  Vue.prototype.$pc = true

}
  // "postcss": {
  //   "plugins": {
  //     "autoprefixer": {},
  //     "postcss-px2rem": {
  //       "remUnit": 75,
  //       "selectorBlackList": [
  //         ".el-"
  //       ]
  //     }
  //   }
  // }
new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
