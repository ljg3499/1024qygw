<template>
  <div style="background: #F0F4FB;" class="p_join_container">
    <div class="p_banner bg">
      <div class="p_top">
        <div class="p_left">
          <img src="../../assets/logo.png" alt />
        </div>
        <!-- <div class="p_right">
          <div @click="goto(1)" :class="[active==1?'activeClass':'',{'Home':true}]">首页</div>
          <div @click="goto(2)" :class="[active==2?'activeClass':'',{'Home':true}]">业务范围</div>
          <div @click="goto(3)" :class="[active==3?'activeClass':'',{'Home':true}]">加入我们</div>
          <div @click="goto(4)" :class="[active==4?'activeClass':'',{'Home':true}]">关于我们</div>
        </div> -->
        <div class="p_right" >
          <div  @click="goto(item.id)"    @mouseleave="mouseleave321"
          :class="[show9 == item.id?'activeClass':'',active==item.id?'activeClass':'']" @mouseenter="mouseenter123(item.id)" v-for="item in NavigationBar" :key="item.id">{{item.data}}</div>
        </div>
      </div>
    </div>
    <div class="p_content">
      <el-tabs style="height: 800px;" :tab-position="tabPosition">
        <el-tab-pane  style="font-size:17.99px" label="高级WEB前端工程师">
          <p class="p_title">高级WEB前端工程师</p>
          <p class="p_title_1">职责：</p>
          <p class="p_title_2">
            1、Web前端表现层及前后端交互的架构设计和开发；
            <br />2、JavaScript程序模块开发，通用类库、框架编写；
            <br />3、配合后台开发人员实现产品界面和功能；
            <br />4.负责大型互联网应用的PC和移动端前端开发；
            <br />5.与产品和美术沟通，对UI细节有很好的把握；
            <br />6.确保产品具有优质的用户体验与良好的兼容性。
          </p>
          <p class="p_title_1">要求：</p>
          <p class="p_title_2">
            1.精通各种Web前端技术，XHTML、VUE、CSS、JavaScript，熟悉页面架构和布局；
            <br /> 2.熟悉React、AngularJS、VUE者优先；
            <br />2.作为主力开发过至少一个iOS应用；
            <br /> 3.对HTML5CSS3方面有实际的理解和实践经验；
            <br /> 4.最好有敏捷开发的能力，具有移动端前端开发经验和小程序开发经验优先。；
            <br /> 5.具有较强的沟通能力，分析和解决问题的能力，具备良好的团队合作精神；
            <br />6.工作时间6.5小时制 早上9点半-晚上6点
          </p>
          <p class="p_title_1">邮箱:</p>
          <p class="p_title_2">95527233@qq.com</p>
        </el-tab-pane>
        <!-- <el-tab-pane label="高级iOS开发工程师">
          <p class="p_title">高级IOS开发工程师</p>
          <p class="p_title_1">职责：</p>
          <p class="p_title_2">
            1.负责公司规划的ios应用开发和维护；
            <br />2.独立完成产品开发工作，并及时验证和修正测试中出现的问题；
            <br />3.根据应用需求与相关人员沟通配合完成架构和模块设计、编码、测试工作；
            <br />4.负责移动端新技术研究、功能扩展、性能优化与改进，相关开发文档的整理与编写；
            <br />5.重视用户使用体验，主动思考产品特性，能根据反馈的需要进行调试修改；
          </p>
          <p class="p_title_1">要求：</p>
          <p class="p_title_2">
            1.计算机或相关专业，大专及以上学历，
            <br />2年以上iOS开发经验；
            <br />2.作为主力开发过至少一个iOS应用；
            <br />3.熟悉iOS前端与后台通信机制，熟悉多线程、Socket网络编程，熟悉TCP、UDP、HTTP等网络协议；
            <br />4.熟悉Xcode开发环境，熟悉iphone/ipad App开发流程；熟悉Socket网络编程和HTTP协议；
            <br />5.了解iOS平台内存管理机制、进程管理机制、任务管理机制；
            <br />6.了解/熟悉Linux/Unix Shell编程者优先；
          </p>
          <p class="p_title_1">邮箱:</p>
          <p class="p_title_2">123Xmind@liuxiaohua.com</p>
        </el-tab-pane> -->
        <!-- <el-tab-pane label="高级PHP研发工程师">
          <p class="p_title">高级PHP研发工程师</p>
          <p class="p_title_1">职责：</p>
          <p class="p_title_2">
            1.负责公司规划的ios应用开发和维护；
            <br />2.独立完成产品开发工作，并及时验证和修正测试中出现的问题；
            <br />3.根据应用需求与相关人员沟通配合完成架构和模块设计、编码、测试工作；
            <br />4.负责移动端新技术研究、功能扩展、性能优化与改进，相关开发文档的整理与编写；
            <br />5.重视用户使用体验，主动思考产品特性，能根据反馈的需要进行调试修改；
          </p>
          <p class="p_title_1">要求：</p>
          <p class="p_title_2">
            1.计算机或相关专业，大专及以上学历，
            <br />2年以上iOS开发经验；
            <br />2.作为主力开发过至少一个iOS应用；
            <br />3.熟悉iOS前端与后台通信机制，熟悉多线程、Socket网络编程，熟悉TCP、UDP、HTTP等网络协议；
            <br />4.熟悉Xcode开发环境，熟悉iphone/ipad App开发流程；熟悉Socket网络编程和HTTP协议；
            <br />5.了解iOS平台内存管理机制、进程管理机制、任务管理机制；
            <br />6.了解/熟悉Linux/Unix Shell编程者优先；
          </p>
          <p class="p_title_1">邮箱:</p>
          <p class="p_title_2">123Xmind@liuxiaohua.com</p>
        </el-tab-pane> -->
      </el-tabs>
    </div>
    <div class="p_footer">
      <div class="p_width">
        <div class="p_left">
          <div class="p_item" @click="goto(4)">关于我们</div>
          <div class="p_item" @click="goto(3)">加入我们</div>
          <div class="p_item">
            <div style="display: flex; justify-content: space-around; align-items: center; width: 109px;">
              <div>
                联系我们
              </div>
              <img src="../../assets/watch.png" alt  style=" height:16px;" />
            </div>
            <div class="p_bg">
              <img src="../../assets/WechatIMG528.png" alt  style="" />
            </div>
          </div>
          <div class="p_item">企业服务</div>
        </div>
        <div class="p_right">COPYRIGHT 2018 厦门一零二四科技有限公司 YILINGERSI</div>
      </div>
      <div class="p_code"></div>
    </div>
  </div>
</template>
<script>
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
      show9:3,
      NavigationBar:[
        {id:1, data:'首页'},
        {id:2, data:'业务范围'},
        {id:3, data:'加入我们'},
        {id:4, data:'关于我们'}
      ],
      show: false,
      active: "3",
      tabPosition: "left"
    };
  },
  methods: {
    goto(x) {
      this.active = x;
      if (x == 2) {
        this.$router.push("/business");
      } else if (x == 1) {
        this.$router.push("/");
      } else if (x == 4) {
        this.$router.push("/about");
      }
    },
     mouseleave321(){
      this.show9 = 0
    },
    mouseenter() {
      this.show = true;
    },
    mouseleave() {
      this.show = false;
    },
    mouseenter123(item){
      this.show9 = item;
      // console.log(item)
      console.log(this.show9)
    },
  }
};
</script>
<style lang="less">
.p_content /deep/ .el-tabs .el-tabs__header{
  background-color: #F5F5F5;
}
.p_content /deep/ .el-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav{
  background-color: #ffffff;
}
.p_join_container {
  width: 100%;
  height: 100%;

  .bg {
    // position: relative;
    background: url("../../assets/pc/jr.png") no-repeat;
  }
  .p_content {
    width: 65%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
    margin-bottom: 112px;
    .el-tabs--left .el-tabs__active-bar.is-left,
    .el-tabs--left .el-tabs__nav-wrap.is-left::after {
      left: 0 !important;
    }
    .el-tabs__item {
      font-size: 18px;
      font-family: PingFang SC;
      text-align: left;
      height: 60px;
      line-height: 60px;
      color: rgba(153, 153, 153, 1);
    }
    .is-active {
      font-size: 18px;
      font-family: PingFang SC;
      border-top: 1px solid rgba(245, 245, 245, 1);
      border-bottom: 1px solid rgba(245, 245, 245, 1);
      color: rgba(51, 51, 51, 1);
    }
    .el-tab-pane {
      height: 700px;
      text-align: left;
      padding: 15px 58px;
      .p_title {
        font-size: 22px;
        font-family: PingFang SC;
        font-weight: 800;
        color: rgba(51, 51, 51, 1);
      }
      .p_title_1 {
        font-size: 22px;
        padding-top: 36px;
        font-family: PingFang SC;
        font-weight: 800;
        color: rgba(51, 51, 51, 1);
      }
      .p_title_2 {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 32px;
      }
    }
  }
  .p_footer {

    // height: 100px;
    width: 100%;
    background: rgba(40, 40, 40, 1);
    .p_width {
      width: 62%;
      height: 100%;
      margin: 0 auto;
      display: flex;

      > .p_left {
        width: 60%;
        display: flex;
        .p_item:hover .p_bg {
          // background: red;
          display: block;
        }
        .p_item {
              display: block;
    word-break: keep-all;
          margin-right: 72px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(102, 102, 102, 1);
          line-height: 100px;
          cursor: pointer;
          position: relative;
          .p_wat {
            position: absolute;
            margin-left: 23%;;
            top: 50%;
            transform: translateY(-50%);
          }
          .p_bg {
                        display: none;

            position: absolute;
            background:url(~@/assets/codebg.png) no-repeat;
            background-size: contain;
            top: -60%;
            left: 40%;
            width: 100px;
            height: 100px;
            >img{
              width:70px;
              display: block;
              margin:10px 10px 10px 12px;
              height:70px;
              object-fit: cover;
            }
          }
        }
      }
      > .p_right {
        flex: 1;
        color: rgba(102, 102, 102, 1);
        font-weight: bold;
        line-height: 100px;
        font-size: 14px;
        text-align: right;
        justify-content: center;
      }
    }
    .p_code {
    }
  }
}
.Home:hover {
  border: 1px solid #ffffff;
  border-radius: 4px;
}
</style>
