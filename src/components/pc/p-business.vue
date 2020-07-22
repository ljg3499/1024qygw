<template>
  <div class="p_business_container">
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
          <div  @click="goto(item.id)" @mouseleave="mouseleave321"
          :class="[show9 == item.id?'activeClass':'',active==item.id?'activeClass':'']" @mouseenter="mouseenter123(item.id)" v-for="item in NavigationBar" :key="item.id">{{item.data}}</div>
        </div>
      </div>
      <!-- <p class="p_text1">先进的互联网解决方案提供</p>
      <p class="p_text2">同样的价格 更好的选择</p>
      <div class="p_text3">查看详情</div>-->
    </div>
    <div class="p_catagory_list">
      <div v-for="item in list" :key="item.id">
        <div class="left">
          <img :src="item.img" alt />
        </div>
        <div class="right">
          <p>{{item.content}}</p>
          <p>{{item.lag}}</p>
        </div>
      </div>
    </div>
    <div class="p_app">
      <p class="p_p1">APP开发服务</p>
      <p class="p_p2">APP Services</p>
      <div class="p_app_list">
        <div v-for="item in list2" :key="item.id">
          <img :src="item.img" alt />
          <div class="p_title"> {{item.title}} </div>
          <div class="p_content" style="text-align: center;"> {{item.content}} </div>
        </div>
      </div>
    </div>
    <div class="p_Blockchain">
      <p class="p_p1">区块链</p>
      <p class="p_p2">Block Chain</p>
      <div  style="display: flex; justify-content: center; margin-top: 75px;  border-radius:1003px;">
        <div class="img1" v-for="item in cardList" :key="item.id">
          <div style="width:400px; height: 400px;" @mouseenter="mouseleave9(item)"> <!-- @mouseout="mouseout9" -->
            <div :class="[ item.id !== show4 ? {'hide':true} : '']" style="position: absolute; z-index: 1;">
              <img style="margin-top:60px;" :src="item.img">
              <div class="title" style="color:#eeeeee; font-size:16px; width:300px; margin: 20px 50px 0px 50px;">
                {{item.title}}
              </div>
            </div>
            <div style="position: absolute; color:#eeeeee; font-size:16px; width:300px; margin: 170px 50px 0px 50px;
            z-index: 1; text-indent:2em" v-if="show4 == item.id">{{item.content}}</div>
            <img class="img" :style="{borderRadius: data123}" :src="item.imgbg"><!--show4 == item.id?  data123: '' -->
          </div>
        </div>
      </div>
      <!-- <div class="p_card">
        <el-carousel type="card" :autoplay="false" indicator-position="none" arrow="never"  ref="carousel">
          <el-carousel-item v-for="item in cardList" :key="item.id">
            <div
              :style="{'background':'url('+item.imgbg+')','background-repeat':'no-repeat','background-size':'contain',}"
              @mouseenter.stop.self="mouseenter2(item)" @mouseleave="mouseleave2(item)"
              :class="['p_item_card',show==item.id?'p_showText':'']"
              :name="item.id" ref="carousel_item">
              <img :src="item.img" alt />
              <img :src="item.img" alt />
              <p>{{item.title}}</p>
              <div >{{item.content}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div> -->
    </div>
    <div class="p_chat">
      <p class="p_p1">即时聊天工具</p>
      <p class="p_p2">Instant Messaging Tools</p>
      <div class="p_chat_list">
        <div
          v-for="item in list3"
          :key="item.id"
          @mouseenter="mouseenter3(item)"
          :class="[show3==item.id?'p_showText':'']"
          style="margin: 0 10%;" >
          <!-- <img :src="item.img" alt style="height:67px; width:67px; margin-top:20px;" />
          <div class="p_title">{{item.title}}</div>
          <div class="p_content" v-show="show3==item.id">{{item.content}}</div> -->

          <div :class="{'box':true, 'a': show3==item.id}" style="height: 450px;">
            <div :class="{'box-hd':true,'b': show3==item.id}">
              <img style="height: 70px; width: 70px; margin-top:55px;" :src="item.img" alt="">
              <div class="box-title" style="font-size:19.97px; margin-bottom:25px;">{{item.title}}</div>

            </div>
            <div :class="{'box-desc':true, 'c':show3==item.id}" style="font-size:15.99px;">
              <div style="padding-top: 40px; padding-left:10px; padding-right:10px;">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p_compay">
      <div>
        <p>网站建设</p>
        <p>Website construction</p>
        <p>网站建设中整合营销技巧和营销手法，通过对网站构架、页面布局的有机调整，突出展示产品服务，帮助企业拓宽商业渠道，获取商业订单。时时调整营销手段，达到精准营销的效果。以创意元素设计企业品牌宣传型的网站，有灵魂的设计师为您打造创意精品网站，让访客产生眼前一亮的感觉，以震撼的视觉冲击力，塑造令人记忆深刻的品牌形象；助力企业扩大品牌知名度，增强品牌效应。</p>
        <p>网站建设中整合营销技巧和营销手法，通过对网站构架、页面布局的有机调整，突出展示产品服务，帮助企业拓宽商业渠道，获取商业订单。时时调整营销手的设计师为您打造创意精品网站，让访客产生眼前一亮的感觉，以震撼的视觉冲击力，塑造令人记忆深刻的品牌形象；助力企业扩大品牌知名度，增强品牌效应。</p>
      </div>
    </div>
    <div class="p_applet">
      <p class="p_p1">小程序开发</p>
      <p class="p_p2">Small Program</p>
      <div  class="p_tab">
        <el-tabs class="tab"  v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="社交营销小程序" name="1">
            <div class="p_content">
              <div>
                <img src="../../assets/p20.png" alt />
              </div>
              <div>
                <p class="p_content_text1">社交营销小程序</p>
                <p class="p_content_text2">Social red packet marketing</p>
                <p
                  class="p_content_text3"
                >发红包，本来是中国人遇到喜事的时候会分发的一种礼节性的赠予，包括节日中长辈对小辈的红包，或者是在节假日的时候老板给员工发放，还有就是婚庆典礼中增添喜庆气氛。随着中国社会经济的发展与习俗的演变，红包的发放场合越来越多，里面的内容也越来越丰富，几乎随处可见。</p>
                <p
                  class="p_content_text3"
                >从本质上看，发红包是一种社交活动，一般见于亲属或朋友之间，以前的接受方往往还会故作推辞一番，可现在很多人都是冲着红包而去的，至于网络上，已经演变成了“抢红包”。于是，作为人类肢体延伸的互联网也成为抢红包的最好场景，更因为社交工具的便捷性而大红大紫。</p>
                <p
                  class="p_content_text3"
                >发红包这类社交游戏，如今这风头也只有当年的“偷菜”可以相提并论，就如同全民参与偷菜一样，发红包抢红包虽然是微信开始挑头，但如今的红包营销早已经超出了微信的圈子，成为了全互联网行业的流行时尚。</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="节日营销小程序" name="2">
            <div class="p_content">
              <div>
                <img src="../../assets/p21.png" alt />
              </div>
              <div>
                <p class="p_content_text1">社交营销小程序</p>
                <p class="p_content_text2">Social red packet marketing</p>
                <p
                  class="p_content_text3"
                >传统节日是传承优秀历史文化的重要载体，既使人们在节日中增长知识，受到教益，又有助于彰显文化、弘扬美德、陶冶情操、弘扬传统。民俗节日是人类文明进化发展的产物，大部分节日习俗在上古时代就已初露端倪。</p>
                <p
                  class="p_content_text3">中秋节博饼（跋饼），是起源于福建厦门鼓浪屿，始于清初，是一种独特的月饼文化，也是闽南人对历史的一种传承。相传，中秋博饼，是郑成功屯兵鼓浪屿时为解士兵的中秋相思之情、激励鼓舞士气而发明的。于是，一代一代传下来，就成了如今闽南地区独具特色的民间习俗。</p>
                <p
                  class="p_content_text3"
                >中秋佳节提供的博饼小游戏以及通过积分换购商品活动，增添中秋的浓郁气氛。爱博饼小程序通过微信搜索打开，进行线上博饼活动，博饼奖励为积分，按博饼规则获取不同积分，积分可以进行钻石兑换，钻石也可以抽取获得，积攒钻石可换购自己心仪的商品。</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="婚恋匹配小程序" name="3">
            <div class="p_content">
              <div>
                <img src="../../assets/p22.png" alt />
              </div>
              <div>
                <p class="p_content_text1">婚恋匹配小程序</p>
                <p class="p_content_text2">Social red packet marketing</p>
                <p
                  class="p_content_text3"
                >随着社会的发展，都市的生活节奏越来越快，交友圈越来越窄，剩男剩女越来越多，给网络婚恋市场带来了巨大的发展机会和强大的市场需求！这几年来区域相亲活动异常的火爆，相亲小程序可以帮您实现线上的相亲展示、匹配筛选、相亲会员注册和资料管理、红娘牵线服务、收取会员费等诸多功能。</p>
                <p
                  class="p_content_text3"
                >的相亲交友平台。每个用户的个人信息都经过后台严格审核后进入筛选系统进行匹配，并对用户信息进行一定程度的保密措施，让用户更有安全感。匹配成功即可由恋爱助理牵线进入进一步了解。</p>
                <p
                  class="p_content_text3"
                >这是一套真正理解相亲，懂模式，懂运营的线上相亲平台解决方案。真诚希望我们的这套相亲系统能帮助到全国的单身男女们早日脱单。</p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="商城小程序" name="4">
            <div class="p_content">
              <div>
                <img src="../../assets/p23.png" alt />
              </div>
              <div>
                <p class="p_content_text1">商城小程序</p>
                <p class="p_content_text2">Social red packet marketing</p>
                <p
                  class="p_content_text3"
                >小程序商城就是一种小程序形态的商城系统，在小程序尚未诞生，商城常见的形态为商城网站、商城APP，而小程序因其轻便性更受欢迎，因而小程序商城如今非常火爆。适合生活服务类线下商铺以及非刚需低频应用的转换，能够实现消息通知、线下扫码、公众号关联等七大功能。</p>
                <p
                  class="p_content_text3"
                >其中，通过公众号关联，用户可以实现公众号与小程序之间相互跳转。它是一个“连接器”，在线上通过服务，获取意向客户，更好地服务客户，建立自己的客户群体。微信里的好友群体与小程序的结合也使这一过程变得更加顺畅。</p>
                <p
                  class="p_content_text3"
                >小程序商城的出现帮助商家获取更多新流量，充分利用微信互联网的优势进行获客，去服务客户。他还实现了将 “用户”到“客户”的转化，充分利用微信互联网优势，享受优质上午社交关系带来的客户裂变增长。</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="p_contact">
      <p class="p_p1">
        如果您有合作意愿或者任何疑问<br>
        请麻烦与我们联系
      </p>
      <p class="p_p2">CONTACT US</p>
      <div class="p_form">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="form.name" placeholder="如何称呼您？" style="width:380px;margin-right:40px;"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="form.contact" @change="tel" placeholder="您的联系方式？"  style="width:380px"></el-input>
          </el-form-item>
            <br>
          <el-form-item>
            <el-input
            v-model="form.content"
            placeholder="请输入留言内容... ..." type="textarea" style="width:814px"  :autosize="{ minRows: 9, }"></el-input>
          </el-form-item>
          <br>
          <el-form-item>
            <el-button type="primary" @click="Submit" style="width:360px; height:60px; background:#0079FE; font-size:20px;">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
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
<style lang="less">
</style>
<script>
import api from '../../utils/api'
import { Message } from 'element-ui'
export default {
  metaInfo: {
    title:'1024-业务范围',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    return {
      data123:'10px',
      show9:2,
      NavigationBar:[
        {id:1, data:'首页'},
        {id:2, data:'业务范围'},
        {id:3, data:'加入我们'},
        {id:4, data:'关于我们'}
      ],
      toDown:true,
      // x_img:{
      //   img1:require("../../assets/zhuo.png"),
      //   img2:require("../../assets/tian.png"),
      //   img3:require("../../assets/jian.png")
      // },
      x_img:[{
        img1:require("../../assets/zhuo.png"),
        img2:require("../../assets/tian.png"),
        img3:require("../../assets/jian.png")},
        ],
      bigimg:{
        img1:require("../../assets/bigzhuo.png"),
        img2:require("../../assets/bigtian.png"),
        img3:require("../../assets/bigjian.png")
      },
      active: 2,
      show: 0,
      show2: false,
      show3: 1,
      show4: 0,
      activeName: "1",
      carShow:0,
      form:{
        name:'',
        contact:'',
        content:''
      },
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
          imgbg: require("../../assets/zhuo.png"),
          title: "区块链-智能应用合约",
          content:
            "智能合约是一段存储在区块链上的代码，该代码在区块链数据库中被写入和读取，由区块链交易触发。通过打造网络行为“自愿签约—自动履行—履行不能智能立案—智能审判—智能执行”的全流程闭环，提升智能合约执行效率，实现网络数据和网络行为的全流程记录、全链路可信、全节点见证、全方位协作。"
        },
        {
          // img: require("../../assets/an.png"),
          img: require("../../assets/chongwu.png"),
          imgbg: require("../../assets/tian.png"),
          id: "2",
          title: "区块链-宠物养成游戏",
          content:
            "一款结合了娱乐和财务管理的新网络游戏让你在快乐游戏中轻松赚钱。例如，果园游戏是完成从购买种子到耕种、浇水、施肥、除草、收获水果和销售到市场的整个过程。用户声称，饲料，投资和管理钱赚取收入，分割和恢复投资，收入可以翻倍，不断赚取更多的收入，你玩得越久，你赚得越多。"
        },
        {
          id: "3",
          img: require("../../assets/qianbao.png"),
          imgbg: require("../../assets/jian.png"),
          title: "区块链-钱包",
          content:
            "提供更加便捷的链上资产交易服务，拥有账号和密钥两种方式创建账户，推荐生成区块链私钥、创建加密货币账户、完成区块链内交易转账，通过专业的安全系统，风控系统，冷热钱包系统，财务监控系统等，多维度保障数字资产安全。"
        }
      ]
    };
  },
  methods: {
     tel: function() {
      if (!/^1[345789]\d{9}$/.test(this.form.contact)) {
        Message("请输入正确的手机号");
        this.form.contact = "";
        // return;
      }
    },
    //留言
    Submit(){
      api.leaveAMessage({
        username:this.form.name,
        contract:this.form.contact,
        content:this.form.content
      }).then(res=>{
        if(this.form.name == ""){
          Message('请输入姓名')
        }else{
          if(this.form.contact == ""){
            Message('请输入联系方式')
          }else{
            if(this.form.content == ""){
              Message('请输入内容')
            }else{
              if(res.data.code == 200){
                Message(res.data.message);
                this.form.name = "";
                this.form.contact = "";
                this.form.content = "";
              }
            }
          }
        }
      })
    },
    goto(x) {
      this.active = x;
      if(x==1){
          this.$router.push("/")
      }else if(x==3){
          this.$router.push("/join")
      }else if(x==4){
          this.$router.push("/about")
      }
    },
    mouseenter2(item) {
      this.show = item.id;
      // this.change()
    },
    mouseleave2(item){
      this.show=""
    },
    mouseenter3(item) {
      this.show3 = item.id;
    },
    mouseleave321(){
          this.show9 = 0;
    },
    mouseleave9(index) {
      this.show4 = index.id;
    },
    mouseout9(){
      this.show4 = 0;
      console.log(this.show4);
    },
    mouseenter() {
      this.show2 = true;
    },
    mouseleave() {
      this.show2 = false;
    },
    handleClick() {},
    change(val){
      console.log(val)
    //  setActiveItem
    },
    mouseenter123(item){
      this.show9 = item;
      // console.log(item)
      console.log(this.show9)
    },
  }
};
</script>


<style lang="less" scoped>
.title {

}

body {
  margin: 0;
}
.p_business_container {
  height: 100%;
  width: 100%;

  .bg {
    // position: relative;
    background: url("../../assets/pc/yw.png") no-repeat;
  }

  //   .p_text3 {
  //     width: 135px;
  //     height: 36px;
  //     margin: 0 auto;
  //     border: 1px solid rgba(255, 255, 255, 1);
  //     border-radius: 18px;
  //     line-height: 36px;
  //     font-size: 16px;
  //     font-family: PingFang SC;
  //     font-weight: 200;
  //     color: rgba(255, 255, 255, 1);
  //     margin-top: 30px;
  //     cursor: pointer;
  //   }
  .p_catagory_list {
    width: 75%;
    height: 130px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 14px 2px rgba(3, 22, 43, 0.1);
    border-radius: 65px;
    position: absolute;
    top: 570px;
    align-items: center;
    left: 50%;
    padding: 0 2.6%;
    transform: translateX(-50%);
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    > div {
      // flex: 1;
      align-items: center;
      display: flex;
      > .left {
      }
      .right {
        text-align: left;
        padding-left: 10px;
        > p:nth-child(1) {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
        > p:nth-child(2) {
          padding-top: 5px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .p_app {
    padding-top: 130px;
    width: 65%;
    margin: 0 auto;
    .p_app_list {
      width: 100%;
      display: flex;
      margin-top: 50px;

      justify-content: space-between;
      > div {
        width: 230px;
        cursor: pointer;
        .p_title {
          padding: 20px 0;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
        }
        .p_content {
          text-align: left;
          padding: 0 24px;
          box-sizing: border-box;
          // text-indent: 2em;
          margin: 10px 0 40px 0;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 24px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .p_p1 {
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 800;
    color: rgba(51, 51, 51, 1);
  }
  .p_p2 {
    font-size: 20px;
    font-family: Sylfaen;
    font-weight: bold;
    color: rgba(210, 210, 210, 1);
  }
  .p_showText {
    background: rgba(255, 255, 255, 1);
    border-radius: 10px;
  }
  .p_Blockchain {
    margin-top: 75px;

    .p_card {
      width: 65%;

      margin: 50px auto 0;
      /deep/.el-carousel__container {
        height: 440px!important;
        width: 100%;
        margin: 0 80px;
        .el-carousel__item {
          height:440px;
          width: 440px;
          border-radius: 12px;
          .p_item_card {
            height: 100%;
            box-sizing: border-box;
            padding: 64px 54px 38px 62px;
            background-size: contain;
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
          & .p_item_card:hover{
            transform:scale(1.1);
            transition: all 1s;

          }
          .el-carousel__mask{
            display: none!important;
          }
        }
      }
    }
  }
  .p_chat {
    width: 35%;
    margin: 93px auto 0;
    .p_chat_list {
      width: 100%;
      height: 400px;
      display: flex;
      margin-top: 50px;
      // height:300px;
      justify-content: center;
      > div {
        width: 230px;
        cursor: pointer;
        .p_title {
          padding: 20px 0;
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          line-height: 24px;
        }
        .p_content {
          height: 200px;
          text-align: left;
          padding: 0 24px;
          box-sizing: border-box;
          text-indent: 2em;
          margin: 10px 0 40px 0;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 24px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(153, 153, 153, 1);
        }
      }
    }
  }
  .p_compay {
    height: 560px;
    margin-top: 120px;
    background: url(../../assets/jianzhan-2.png) no-repeat;
    > div {
      width: 53%;
      margin: 0 auto;
      padding: 52px 0 102px 0;
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
        font-size: 18px;
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
        font-size: 17px;
        padding-top: 38px;
        box-sizing: border-box;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
      }
    }
  }
  .p_applet {
    margin-top: 100px;
    .p_tab {
      // width: 65%;
      margin: 0 auto;
      /deep/.el-tabs__item{
        color: #000;
      }
      /deep/.el-tabs__nav {
       margin: 20px 218px 0px 218px!important;
        .el-tabs__item {
          padding: 0 40px;
        }
        .el-tabs__active-bar {
          height:4px;
          background:linear-gradient(90deg,rgba(23,126,239,1),rgba(63,98,250,1));
        }
      }
      .el-tabs__content {
        padding-top: 40px;
        .p_content {
          display: flex;
          padding: 0 22%;
          > div:nth-child(1) {
            width: 27%;
            > img {
              object-fit: contain;
              // display: block;
              margin-top: 30px;
            }
          }
          > div:nth-child(2) {
            text-align: left;
            flex: 1;
            padding-top: 36px;
            .p_content_text1 {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: 800;
              color: rgba(51, 51, 51, 1);
            }
            .p_content_text2 {
              font-size: 17px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(210, 210, 210, 1);
            }
            .p_content_text3 {
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
  .p_contact{
      margin-top:180px;
      .p_form{
          margin-top:50px;
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

.box {
  // width: 170px;
  height: 250px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

}

.box-hd {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
}

.box-title {
  margin-top:10px;
}

.box-desc {
  padding: 10px;
  height: 0;
  // height: 150px;
  overflow: hidden;
}

.box,
.box-hd,
.box-desc {
  transition:.5s;
}

.box:hover{
  box-shadow: 0 0 10px rgba(0, 0, 0,.15);
}

.box:hover .box-hd{
  background:rgba(5,117,231,0.03);
}

.box:hover .box-desc {
  padding: 10px ;
  height: 80px ;
}

.a {
  box-shadow: 0 0 10px rgba(0, 0, 0,.15);
}

.b {
  background:rgba(5,117,231,0.03);
}

.c {
  padding: 10px;
  height: 90px;
}
.tab /deep/ .el-tabs__header{
  display: flex;
  justify-content: center;
}
.Home:hover {
  border: 1px solid #ffffff;
  border-radius: 4px;
}
// .p_Blockchain  > div:hover .img{
//   // position: absolute;
//   // display: none;
//   width:100%;
//   border-radius: 10px;
//   height:100%;
//   // border-radius:1003px;
//   // opacity:0.5;
//   // transform: scale(1.2);
// }
.img {
  // border-radius:0px;
}
.img1:hover {
  transition: all 1s;
  transform: scale(1.2);
  // border-radius: 39px;
}

.hide {
  margin-top: 38px;
}
</style>
