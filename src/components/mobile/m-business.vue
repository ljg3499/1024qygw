<template>
  <div class="business_container">
    <div class="banner3">
      <div class="logo"></div>
        <div class="meun" @click="meunShow =!meunShow">

      </div>
      <div class="meun_content" v-if="meunShow">
        <div v-for="item in meunList" :key="item.id" @click="gotoMeun(item)">
          {{item.name}}
        </div>
      </div>
    </div>

    <div class="catagory_list">
      <div  style="padding: 0 0px 0 0px;" v-for="item in list" :key="item.id">
        <img :src="item.img" alt />
        <p class="item_content">{{item.content}}</p>
        <p class="item_lag">{{item.lag}}</p>
      </div>
    </div>
    <div class="app">
      <p class="p1">全面的产品服务体验</p>
      <p class="p2">PRODUCT SCOPE</p>
      <div class="a_list">
        <div v-for="item in list2" :key="item.id">
          <img class="app-img" :src="item.img" alt />
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="Blockchain">
      <p class="p1">区块链</p>
      <p class="p2">Block Chain</p>
      <Swiper2></Swiper2>
      <!-- <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in cardList" :key="index">
          <img class="main-img" :src="item.imgbg" alt="">
          <img :src="item.img" alt />
          <p >{{item.title}}</p>
          <div >{{item.content}}</div>
        </swiper-slide>
      </swiper> -->

      <!-- <div id="carousel">
        <carousel-3d :autoplay="false" :autoplay-timeout="2400">
          <slide v-for="(item,index) in cardList" :key="item.id" :index="index">
            <div>
              <img :src="item.imgbg"/>
              <img :src="item.img" alt />
              <p>{{item.title}}</p>
              <div>{{item.content}}</div>
            </div>
          </slide>
        </carousel-3d>
      </div> -->
      <!-- <div class="card1">
        <el-carousel type="card" :autoplay="false" indicator-position="none" arrow="never"  ref="carousel">
          <el-carousel-item v-for="item in cardList" :key="item.id">
            <div
              :style="{'background':'url('+item.imgbg+')','background-repeat':'no-repeat','background-size':'contain',}"
              @mouseenter.stop.self="mouseenter2(item)" @mouseleave="mouseleave2(item)"
              :class="['item_card',show==item.id?'p_showText':'']"
              :name="item.id" ref="carousel_item">
              <img style="padding-right: 252px; padding-top:20px;" :class="[item.id !== show4 ? {'hide':true} : '',]" :src="item.img" alt />
              <p style="font-size:16px;">{{item.title}}</p>
              <div style="font-size:16px;" v-if="show4 == item.id">{{item.content}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div> -->
      <!-- <div class="card">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item in cardList" :key="item.id">
            <div
              :style="{'background':'url('+item.imgbg+')','background-repeat':'no-repeat','background-size':'cover'}"
              class="item_card"
            >
              <img :src="item.img" alt />
              <p>{{item.title}}</p>
              <div>{{item.content}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
    <!-- <div class="chat">
      <p class="p1">即时聊天工具</p>
      <p class="p2">Instant Messaging Tools</p>
      <div class="chat_list">
        <swiper ref="mySwiper" style="padding-right:40px;"  :options="swiperOptions2">
          <swiper-slide style="margin-left:10px;" v-for="item in list3" :key="item.id" >
            <div class="showText">
              <div style="background:#F7FBFE;">
                <img :src="item.img" alt style=" width: 40%; margin-top: 10px;" />
                <div class="title">{{item.title}}</div>
              </div>
              <div class="content">{{item.content}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
    <div class="app1">
      <p class="p1">即时聊天工具</p>
      <p class="p2">Instant Messaging Tools</p>
      <div class="a_list">
        <div v-for="item in list3" :key="item.id">
          <div class="left" style="background:#F7FBFE;">
            <img style="margin-top: 13px;height: 50px;" :src="item.img" alt />
            <div class="title">{{item.title}}</div>
          </div>
          <div class="right">
            <div class="content" style="padding: 10px;">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="compay">
      <div>
        <p>网站建设</p>
        <p>Website construction</p>
        <p>网站建设中整合营销技巧和营销手法，通过对网站构架、页面布局的有机调整，突出展示产品服务，帮助企业拓宽商业渠道，获取商业订单。时时调整营销手段，达到精准营销的效果。以创意元素设计企业品牌宣传型的网站，有灵魂的设计师为您打造创意精品网站，让访客产生眼前一亮的感觉，以震撼的视觉冲击力，塑造令人记忆深刻的品牌形象；助力企业扩大品牌知名度，增强品牌效应。</p>
        <p>网站建设中整合营销技巧和营销手法，通过对网站构架、页面布局的有机调整，突出展示产品服务，帮助企业拓宽商业渠道，获取商业订单。时时调整营销手的设计师为您打造创意精品网站，让访客产生眼前一亮的感觉，以震撼的视觉冲击力，塑造令人记忆深刻的品牌形象；助力企业扩大品牌知名度，增强品牌效应。</p>
      </div>
    </div>
    <div class="applet">
      <p class="p1">小程序开发</p>
      <p class="p2">Small Program</p>
      <div class="tab">
        <van-tabs v-model="active">
          <van-tab title="社交营销小程序" name="1">
            <div class="content">
              <div style="margin-top:21px;">
                <img src="../../assets/p20.png" alt />
              </div>
              <div>
                <p class="content_text1">社交营销小程序</p>
                <p class="content_text2">Social red packet marketing</p>
                <p
                  class="content_text3"
                >发红包，本来是中国人遇到喜事的时候会分发的一种礼节性的赠予，包括节日中长辈对小辈的红包，或者是在节假日的时候老板给员工发放，还有就是婚庆典礼中增添喜庆气氛。随着中国社会经济的发展与习俗的演变，红包的发放场合越来越多，里面的内容也越来越丰富，几乎随处可见。</p>
                <p
                  class="content_text3"
                >从本质上看，发红包是一种社交活动，一般见于亲属或朋友之间，以前的接受方往往还会故作推辞一番，可现在很多人都是冲着红包而去的，至于网络上，已经演变成了“抢红包”。于是，作为人类肢体延伸的互联网也成为抢红包的最好场景，更因为社交工具的便捷性而大红大紫。</p>
                <p
                  class="content_text3"
                >发红包这类社交游戏，如今这风头也只有当年的“偷菜”可以相提并论，就如同全民参与偷菜一样，发红包抢红包虽然是微信开始挑头，但如今的红包营销早已经超出了微信的圈子，成为了全互联网行业的流行时尚。</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="节日营销小程序" name="2">
            <div class="content">
              <div style="margin-top:21px;">
                <img src="../../assets/p21.png" alt />
              </div>
              <div>
                <p class="content_text1">节日营销小程序</p>
                <p class="content_text2">Social red packet marketing</p>
                <p
                  class="content_text3"
                >传统节日是传承优秀历史文化的重要载体，既使人们在节日中增长知识，受到教益，又有助于彰显文化、弘扬美德、陶冶情操、弘扬传统。民俗节日是人类文明进化发展的产物，大部分节日习俗在上古时代就已初露端倪。</p>
                <p
                  class="content_text3"
                >中秋节博饼（跋饼），是起源于福建厦门鼓浪屿，始于清初，是一种独特的月饼文化，也是闽南人对历史的一种传承。相传，中秋博饼，是郑成功屯兵鼓浪屿时为解士兵的中秋相思之情、激励鼓舞士气而发明的。于是，一代一代传下来，就成了如今闽南地区独具特色的民间习俗。</p>
                <p
                  class="content_text3"
                >中秋佳节提供的博饼小游戏以及通过积分换购商品活动，增添中秋的浓郁气氛。爱博饼小程序通过微信搜索打开，进行线上博饼活动，博饼奖励为积分，按博饼规则获取不同积分，积分可以进行钻石兑换，钻石也可以抽取获得，积攒钻石可换购自己心仪的商品。</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="婚恋匹配小程序" name="3">
            <div class="content">
              <div style="margin-top:21px;">
                <img src="../../assets/p22.png" alt />
              </div>
              <div>
                <p class="content_text1">婚恋匹配小程序</p>
                <p class="content_text2">Social red packet marketing</p>
                <p
                  class="content_text3"
                >随着社会的发展，都市的生活节奏越来越快，交友圈越来越窄，剩男剩女越来越多，给网络婚恋市场带来了巨大的发展机会和强大的市场需求！这几年来区域相亲活动异常的火爆，相亲小程序可以帮您实现线上的相亲展示、匹配筛选、相亲会员注册和资料管理、红娘牵线服务、收取会员费等诸多功能。</p>
                <p
                  class="content_text3"
                >的相亲交友平台。每个用户的个人信息都经过后台严格审核后进入筛选系统进行匹配，并对用户信息进行一定程度的保密措施，让用户更有安全感。匹配成功即可由恋爱助理牵线进入进一步了解。</p>
                <p
                  class="content_text3"
                >这是一套真正理解相亲，懂模式，懂运营的线上相亲平台解决方案。真诚希望我们的这套相亲系统能帮助到全国的单身男女们早日脱单。</p>
              </div>
            </div>
          </van-tab>
          <van-tab title="商城小程序" name="4">
            <div class="content">
              <div style="margin-top:21px;">
                <img src="../../assets/p23.png" alt />
              </div>
              <div>
                <p class="content_text1">商城小程序</p>
                <p class="content_text2">Social red packet marketing</p>
                <p
                  class="content_text3"
                >小程序商城就是一种小程序形态的商城系统，在小程序尚未诞生，商城常见的形态为商城网站、商城APP，而小程序因其轻便性更受欢迎，因而小程序商城如今非常火爆。适合生活服务类线下商铺以及非刚需低频应用的转换，能够实现消息通知、线下扫码、公众号关联等七大功能。</p>
                <p
                  class="content_text3"
                >其中，通过公众号关联，用户可以实现公众号与小程序之间相互跳转。它是一个“连接器”，在线上通过服务，获取意向客户，更好地服务客户，建立自己的客户群体。微信里的好友群体与小程序的结合也使这一过程变得更加顺畅。</p>
                <p
                  class="content_text3"
                >小程序商城的出现帮助商家获取更多新流量，充分利用微信互联网的优势进行获客，去服务客户。他还实现了将 “用户”到“客户”的转化，充分利用微信互联网优势，享受优质上午社交关系带来的客户裂变增长。</p>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="contact">
      <p class="p1">
        如果您有合作意愿或者任何疑问
        <br />请麻烦与我们联系
      </p>
      <p class="p2">CONTACT US</p>
      <div class="form">
        <div style="margin-bottom:30px; display: flex;">
          <van-field style="background:rgba(243,243,243,1); border-radius:5px;" required v-model="name" placeholder="如何称呼您？" />
          <van-field required v-model="contact" placeholder="您的联系方式？" style="border-radius:5px;" />
        </div>
        <van-field v-model="content" placeholder="请输入留言内容... ..." style="background:rgba(243,243,243,1); border-radius:5px;" type="textarea" rows="4" />
        <van-button type="info" size="large" block style="height:40px; font-size: 15px; margin-top:20px; border-radius: 5px;" @click="Submit">提交</van-button>
      </div>
    </div>
    <div
      class="footer"
    >COPYRIGHT 2018 厦门一零二四科技有限公司 XIAMEN YILINGERSI TECHNOLOGY CO.,LTD. 闽ICP备15008430号-1</div>
    </div>
  </div>
</template>
<style lang="less">
</style>
<script>
import api from '../../utils/api';
import { Tab, Tabs, Field,Button,Toast  } from "vant";
import { Carousel3d, Slide } from 'vue-carousel-3d';
import Swiper2 from '../swiper2'
export default {
  metaInfo: {
    title:'1024-业务范围',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Button.name]: Button,
    Swiper2
    // Carousel3d,
    // Slide
  },
  data() {
    return {
      swiperOption:{
          //显示分页
          pagination: {
            el: '.swiper-pagination'
          },
          //设置点击箭头
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          //自动轮播
          autoplay: {
            // delay: 2000,
            //当用户滑动图片后继续自动轮播
            // disableOnInteraction: false,
          },
          //开启循环模式
          // loop: true
      },
      show4:0,
      name:"",
      contact:"",
      content:"",
      active: 2,
      show: 0,
      show2: false,
      meunShow:false,
      show3: 0,
      activeName: "1",
      value:'',
      form: {
        name: ""
      },
      meunList:[
        {id:1,name:'首页'},
        {id:2,name:'业务范围'},
        {id:3,name:'加入我们'},
        {id:4,name:'关于我们'},
      ],
      list: [
        {
          id: 1,
          img: require("../../assets/5.png"),
          content: "APP开发服务",
          lag: "APP Services"
        },
        {
          id: 2,
          img: require("../../assets/8.png"),
          content: "即时聊天工具",
          lag: "Instant Messaging"
        },
        {
          id: 3,
          img: require("../../assets/6.png"),
          content: "区块链",
          lag: "Block Chain"
        },
        {
          id: 4,
          img: require("../../assets/9.png"),
          content: "网站建设",
          lag: "Web construction"
        },
        {
          id: 5,
          img: require("../../assets/8.png"),
          content: "小程序",
          lag: "Small Program"
        }
      ],
      list3: [
        {
          id: 1,
          img: require("../../assets/duo.png"),
          title: "多应用集成场景",
          content:
            "可复用的长连接，一切高实时性的场景，都适合使用IM来做，比如：视频会议、聊天、私信、互动游戏、在线教育等等。"
        },
        {
          id: 2,
          img: require("../../assets/dingzhi.png"),
          title: "企业级定制方案",
          content:
            "面向企业终端使用者的网络沟通工具服务，强调安全性、实用性、稳定性和扩展性，满足企业内部高效沟通需求的企业协作办公平台。"
        },
        {
          id: 3,
          img: require("../../assets/8.png"),
          title: "端对端加密",
          content:
            "以文字消息为例，对话的双方发送信息时，彼此拥有自己的密钥和对方的公钥，两者结合才能揭秘消息。该技术让我们的通信更安全。"
        }
      ],
      list2: [
        {
          id: 1,
          img: require("../../assets/H5.png"),
          title: "H5定制打包",
          content: "原装封装网站内容，安全稳定 完美适配iOS Android"
        },
        {
          id: 2,
          img: require("../../assets/fenfa.png"),
          title: "多平台内测分发",
          content: "Mac客户端、Windows客户端、微信 小程序满足您不同的使用场景"
        },
        {
          id: 3,
          img: require("../../assets/ios.png"),
          title: "ios开发",
          content: "瞄准中高端客户 助您获取移动应用优势"
        },
        {
          id: 4,
          img: require("../../assets/an.png"),
          title: "Android 安卓开发",
          content: "覆盖多种智能终端 适配多种机型"
        },
        {
          id: 5,
          img: require("../../assets/ren.png"),
          title: "上架预审",
          content: "多年 iOS 上架经验 成功服务上千款 App 通过审核"
        }
      ],
      cardList: [
        {
          id: "1",
          img: require("../../assets/heyue.png"),
          imgbg: require("../../assets/2.png"),
          title: "区块链-智能应用合约",
          content:
            "智能合约是一段存储在区块链上的代码，该代码在区块链数据库中被写入和读取，由区块链交易触发。通过打造网络行为“自愿签约—自动履行—履行不能智能立案—智能审判—智能执行”的全流程闭环，提升智能合约执行效率，实现网络数据和网络行为的全流程记录、全链路可信、全节点见证、全方位协作。"
        },
         {
          id: "2",
          img: require("../../assets/chongwu.png"),
          imgbg: require("../../assets/1.png"),
          title: "区块链-宠物养成游戏",
          content:
            "一款结合了娱乐和财务管理的新网络游戏让你在快乐游戏中轻松赚钱。例如，果园游戏是完成从购买种子到耕种、浇水、施肥、除草、收获水果和销售到市场的整个过程。用户声称，饲料，投资和管理钱赚取收入，分割和恢复投资，收入可以翻倍，不断赚取更多的收入，你玩得越久，你赚得越多。"
        },
        {
          id: "3",
          img: require("../../assets/qianbao.png"),
          imgbg: require("../../assets/3.png"),
          title: "区块链-钱包",
          content:
            "提供更加便捷的链上资产交易服务，拥有账号和密钥两种方式创建账户，推荐生成区块链私钥、创建加密货币账户、完成区块链内交易转账，通过专业的安全系统，风控系统，冷热钱包系统，财务监控系统等，多维度保障数字资产安全。"
        }
      ],
      swiperOptions: {
        slidesPerView: 1.3,
        slidesPerGroup: 1.3
      },
      swiperOptions2: {
        slidesPerView: 2.3,
        slidesPerGroup: 2.3,
        spaceBetween: 30
      }
    };
  },
  methods: {
    //留言
    Submit(){
      api.leaveAMessage({
        username:this.name,
        contract:this.contact,
        content:this.content
      }).then(res=>{
        if(this.name == ""){
          Toast('请输入姓名')
        }else{
          if(this.contact == ""){
            Toast('请输入联系方式')
          }else{
            if(this.content == ""){
              Toast('请输入内容')
            }else{
              if(res.data.code == 200){
                Toast(res.data.message);
                this.name = "";
                this.contact = "";
                this.content = "";
              }
            }
          }
        }
      })
    },
    goto(x) {
      this.active = x;
      if (x == 1) {
        this.$router.push("/");
      }
    },
     gotoMeun(item){
      if(item.id==1){
          this.$router.push("/")
      }else if(item.id==2){

      }else if(item.id==3){
          this.$router.push("/join")
      }else if(item.id==4){
          this.$router.push("/about")
      }
    },
    mouseenter2(item) {
      this.show = item.id;
 this.show4 = item.id;
    },
    mouseleave2(item) {
      this.show = "";
    },
    mouseenter3(item) {
      this.show3 = item.id;
    },
    mouseenter() {
      this.show2 = true;
    },
    mouseleave() {
      this.show2 = false;
    },
    handleClick() {},
    onSubmit() {
      alert("提交中");
    }
  }
};
</script>
<style lang="less" scoped>
.app-img {
  width:48px;
  height:50px;
}
.app1 {
    padding-top: 140px;
    margin: 0 auto;
    .a_list {
      display: flex;
      margin: 0 30px;
      flex-direction: column;

      > div {
        margin: 20px 0;
        height: 200px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 8px 0px rgba(3, 22, 43, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        .left {
          width: 260px;
          height: 100%;
          border-radius: 10px;
          .title {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
          }
        }
        .right {
          flex: 1;
          .content {
            text-indent: 2em;
            font-size: 20px;
            text-align: left;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
          }
        }
      }
    }
  }
.card1 {
      // width: 65%;
      margin: 50px auto 0;
      /deep/.el-carousel__container {
            margin-left: -15px;
        height: 440px!important;
        width: 100%;
        // margin: 0 80px;
        .el-carousel__item {
          height:440px;
              width: 230px;
          // width: 440px;
          border-radius: 12px;
          .item_card {
            height: 360px;
            box-sizing: border-box;
            background-size: contain;
            color: #fff;
            width: 500px;
            > p {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(255, 255, 255, 1);
              padding: 20px 0;
              text-align: left;
              padding-left: 50px;
            }
            > div {
              text-indent: 2em;
              font-size: 16px;
              text-align: left;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 100%;
              text-align: left;
              padding-right: 278px;
              padding-left: 22px;
            }
          }
          & .item_card:hover{
            // transform:scale(1.1);
            // transition: all 1s;

          }
          .el-carousel__mask{
            display: none!important;
          }
        }
      }
    }
.business_container {
  height: 100%;
  width: 100%;

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
  .catagory_list {
    width: 710px;
    height: 120px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 14px 2px rgba(3, 22, 43, 0.1);
    border-radius: 75px;
    position: absolute;
    left: 20px;
    align-items: center;
    top: 370px;

    box-sizing: border-box;
    display: flex;
    > div {
      flex: 1;
      margin: 0 auto;
      > img {
        width: 60px;
        height: 60px;
        margin: 0 auto;
        display: block;
      }

      > .item_content {
        font-size: 16.23px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      > .item_lag {
        font-size: 12.52px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .app {
    padding-top: 130px;

    margin: 0 auto;
    .a_list {
      width: 100%;
      display: flex;
      margin-top: 50px;
      flex-wrap: wrap;
      justify-content: space-between;
      > div {
        width: 50%;
        cursor: pointer;
        > img {
          width: 48px;
          height: 58px;
        }
        .title {
          padding: 20px 0;
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
        }
        .content {
          text-align: center;
          padding: 0 50px;
          box-sizing: border-box;
          margin: 0 0 40px 0;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          font-family: PingFang SC;
          color: rgba(153, 153, 153, 1);
          text-indent:2em;
        }
      }
    }
  }
  .p1 {
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 800;
    color: rgba(51, 51, 51, 1);
  }
  .p2 {
    font-size: 20px;
    font-family: Sylfaen;
    font-weight: bold;
    color: rgba(210, 210, 210, 1);
  }

  .Blockchain {
    margin-top: 75px;

    .card {
      margin: 50px auto 0;

      .item_card {
        height: 450px;
        box-sizing: border-box;
        padding: 64px 54px 38px 62px;
        background-size: cover;
        color: #fff;
        > p {
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          padding: 20px 0;
        }
        > div {
          text-indent: 2em;
          font-size: 16px;
          text-align: left;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 28px;
        }
      }
      //   /deep/.el-carousel__container {
      //     height: 440px!important;
      //     width: 100%;
      //     margin: 0 80px;
      //     .el-carousel__item {
      //      height:440px;
      //       width: 440px;

      //     }
      //   }
    }
  }
  .chat {
    margin: 93px auto 0;
    .chat_list {
      width: 100%;
      display: flex;
      margin-top: 50px;

      justify-content: space-between;

      .showText {
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 8px 0px rgba(3, 22, 43, 0.1);
        border-radius: 10px;
        height: 490px;
        .title {
          padding: 20px 0;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
        }
        .content {
          text-align: left;
          padding: 0 30px;
          box-sizing: border-box;
          text-indent: 2em;
          margin: 10px 0 40px 0;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 40px;
          font-size: 19px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .compay {
    height: 650px;
    margin-top: 52px;
    // margin-bottom: 52px;
    background: url(../../assets/jianzhan.png) no-repeat;

    > div {
      margin: 0 auto;
      padding: 50px 50px 50px 50px;
      color: #fff;
      > p:nth-child(1) {
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      > p:nth-child(2) {
        font-size: 20px;
        font-family: Sylfaen;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 20px;
      }
      > p:nth-child(3) {
        text-indent: 2em;
        padding-top: 38px;
        font-size: 19.03px;
        font-family: PingFang SC;
        font-weight: 400;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
        box-sizing: border-box;
      }
      > p:nth-child(4) {
        text-indent: 2em;
        text-align: left;
        font-size: 19.03px;
        padding-top: 38px;
        box-sizing: border-box;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
      }
    }
  }
  .applet {
    margin-top: 100px;
    .tab {
      margin: 0 auto!important;
      padding-top: 20px;
      /deep/.van-tabs__line {
        background: #177eef !important;

        height: 6px;
      }
      .van-tab__pane {
        padding-top: 40px;
        .content {
          display: flex;

          > div:nth-child(1) {
            width: 32%;

            > img {
              object-fit: contain;
              width: 190px;
              // display: block;
            }
          }
          > div:nth-child(2) {
            text-align: left;
            flex: 1;
            padding-top: 39px;
            padding-right: 29px;
            .content_text1 {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: 800;
              color: rgba(51, 51, 51, 1);
            }
            .content_text2 {
              font-size: 17px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(210, 210, 210, 1);
            }
            .content_text3 {
              font-size: 16px;
              margin: 25px 0;
              text-indent: 2em;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 30px;
            }
          }
        }
      }
    }
  }
  .contact {
    margin-top: 90px;

    .form {

      margin:50px 20px 0 20px;
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
.main-img{
  width:80%;
  margin:0 auto;
  display:block;
}
.hide {
  margin-top: 208px;
}
.hide1 {
  margin-top: 15px;
}
</style>
