<template>
  <div class="m_join_container">
    <div class="banner4">
      <!-- <p class="text1 textBg">加入我们有趣的大家庭吧！</p>
      <p class="text2">欢迎志同道合的同志加入</p>
      <div class="text3">马上加入</div> -->
      <div class="logo"></div>
        <div class="meun" @click="meunShow =!meunShow">

      </div>
      <div class="meun_content" v-if="meunShow">
        <div v-for="item in meunList" :key="item.id" @click="gotoMeun(item)">
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="m_job">
      <van-tree-select height="600px" :items="items" :main-active-index.sync="active">
        <template #content>
          <div v-if="active === 0">
            <p class="title">高级WEB前端工程师</p>
            <p class="title_1">职责：</p>
            <p class="title_2">
                1、Web前端表现层及前后端交互的架构设计和开发；
              <br />2、JavaScript程序模块开发， 通用类库、框架编写；
              <br />3、配合后台开发人员实现产品界面和功能；
              <br />4.负责大型互联网应用的PC和移动端前端开发；
              <br />5.与产品和美术沟通，对UI细节有很好的把握；
              <br />6.确保产品具有优质的用户体验与良好的兼容性。
            </p>
            <p class="title_1">要求：</p>
            <p class="title_2">
              1.精通各种Web前端技术，XHTML、VUE、CSS、JavaScript，熟悉页面架构和布局；
              <br />2.熟悉React、AngularJS、VUE者优先；
              <br /> 3.对HTML5CSS3方面有实际的理解和实践经验；
              <br />4.最好有敏捷开发的能力，具有移动端前端开发经验和小程序开发经验优先。；
              <br />5.具有较强的沟通能力，分析和解决问题的能力，具备良好的团队合作精神；
              <!-- <br />5.了解iOS平台内存管理机制、进程管理机制、任务管理机制；
              <br />6.了解/熟悉Linux/Unix Shell编程者优先； -->
            </p>
            <p class="title_1">邮箱:</p>
            <p class="title_2">95527233@qq.com</p>
          </div>
          <!-- <div v-if="active === 1">
            <p class="title">高级iOS开发工程师</p>
            <p class="title_1">职责：</p>
            <p class="title_2">
              1.负责公司规划的ios应用开发和维护；
              <br />2.独立完成产品开发工作，并及时验证和修正测试中出现的问题；
              <br />3.根据应用需求与相关人员沟通配合完成架构和模块设计、编码、测试工作；
              <br />4.负责移动端新技术研究、功能扩展、性能优化与改进，相关开发文档的整理与编写；
              <br />5.重视用户使用体验，主动思考产品特性，能根据反馈的需要进行调试修改；
            </p>
            <p class="title_1">要求：</p>
            <p class="title_2">
              1.计算机或相关专业，大专及以上学历，
              <br />2年以上iOS开发经验；
              <br />2.作为主力开发过至少一个iOS应用；
              <br />3.熟悉iOS前端与后台通信机制，熟悉多线程、Socket网络编程，熟悉TCP、UDP、HTTP等网络协议；
              <br />4.熟悉Xcode开发环境，熟悉iphone/ipad App开发流程；熟悉Socket网络编程和HTTP协议；
              <br />5.了解iOS平台内存管理机制、进程管理机制、任务管理机制；
              <br />6.了解/熟悉Linux/Unix Shell编程者优先；
            </p>
            <p class="title_1">邮箱:</p>
            <p class="title_2">123Xmind@liuxiaohua.com</p>
          </div>
          <div v-if="active === 2">
            <p class="title">高级PHP研发工程师</p>
            <p class="title_1">职责：</p>
            <p class="title_2">
              1.负责公司规划的ios应用开发和维护；
              <br />2.独立完成产品开发工作，并及时验证和修正测试中出现的问题；
              <br />3.根据应用需求与相关人员沟通配合完成架构和模块设计、编码、测试工作；
              <br />4.负责移动端新技术研究、功能扩展、性能优化与改进，相关开发文档的整理与编写；
              <br />5.重视用户使用体验，主动思考产品特性，能根据反馈的需要进行调试修改；
            </p>
            <p class="title_1">要求：</p>
            <p class="title_2">
              1.计算机或相关专业，大专及以上学历，
              <br />2年以上iOS开发经验；
              <br />2.作为主力开发过至少一个iOS应用；
              <br />3.熟悉iOS前端与后台通信机制，熟悉多线程、Socket网络编程，熟悉TCP、UDP、HTTP等网络协议；
              <br />4.熟悉Xcode开发环境，熟悉iphone/ipad App开发流程；熟悉Socket网络编程和HTTP协议；
              <br />5.了解iOS平台内存管理机制、进程管理机制、任务管理机制；
              <br />6.了解/熟悉Linux/Unix Shell编程者优先；
            </p>
            <p class="title_1">邮箱:</p>
            <p class="title_2">123Xmind@liuxiaohua.com</p>
          </div> -->
        </template>
      </van-tree-select>
    </div>
    <div
      class="footer"
    >COPYRIGHT 2018 厦门一零二四科技有限公司 XIAMEN YILINGERSI TECHNOLOGY CO.,LTD. 闽ICP备15008430号-1</div>
  </div>
</template>
<script>
import { TreeSelect } from "vant";
export default {
  metaInfo: {
    title:'1024-加入我们',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    return {
      active: 0,
      meunShow:false,
      items: [
        { text: "高级WEB前端工程师" },
        // { text: "高级iOS开发工程师" },
        // { text: "高级PHP研发工程师  " }
      ],
        meunList:[
        {id:1,name:'首页'},
        {id:2,name:'业务范围'},
        {id:3,name:'加入我们'},
        {id:4,name:'关于我们'},
      ],
    };
  },
  components: {
    [TreeSelect.name]: TreeSelect
  },
  methods:{
      gotoMeun(item){
      if(item.id==1){
          this.$router.push("/")
      }else if(item.id==2){
         this.$router.push("/business")
      }else if(item.id==3){

      }else if(item.id==4){
          this.$router.push("/about")
      }
    },
  }
};
</script>
<style lang="less" scoped>
.m_job /deep/ .van-sidebar-item__text{
  font-size: 18.01px;
}
.m_join_container {
  .bg {
    position: relative;

    background: url("../../assets/detial.png") no-repeat;
    .textBg {
      font-size: 46px;
      line-height: 100px;
    }
    .text2 {
      color: #fff;
      font-size: 20px;
    }
  }
  .text3 {
    width: 135px;
    height: 36px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 18px;
    line-height: 36px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 200;
    color: rgba(255, 255, 255, 1);
    margin-top: 30px;
    cursor: pointer;
  }
  .m_job {

    .van-sidebar-item--select::before {
      position: absolute;
      top: 50%;
      left: 0;
      width: 4px;
      height: 16px;
      background-color: #057cfe;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      content: "";
    }
    .van-tree-select__nav-item{
            padding: 14px 2px;
    }
    .title {

          padding:20px 35px 0;
        text-align: left;
        font-size:24px;
        font-family:PingFang SC;
        font-weight:800;
        color:rgba(51,51,51,1);
    }
    .title_1 {

      font-size: 22px;
      text-align: left;
         padding:36px 35px 0;
      font-family: PingFang SC;
      font-weight: 800;
      color: rgba(51, 51, 51, 1);
    }
    .title_2 {
        padding:20px 35px 0;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 400;
      text-align: left;
      color: rgba(51, 51, 51, 1);
      line-height: 32px;
    }
  }
    .footer {
    padding: 20px 0px;
    background: rgba(39, 39, 39, 1);
    opacity: 0.9;
     margin-top:20px;
    text-align: center;
    font-size: 12px;
    font-family: PingFang SC;

    color: rgba(101, 101, 101, 1);
  }
}
</style>
