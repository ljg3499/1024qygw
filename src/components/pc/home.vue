<template>
  <div class="p_home_container">
    <div class="p_banner bg">
      <div class="p_top">
        <div class="p_left">
          <img src="../../assets/logo.png" alt />
        </div>
        <div class="p_right" >
          <div  @click="goto(item.id)"
            :class="[show9 == item.id?'activeClass':'',
            active==item.id?'activeClass':'']"
            @mouseenter="mouseenter123(item.id)"
            @mouseleave="mouseleave321"
            v-for="item in NavigationBar" :key="item.id">{{item.data}}</div>
        </div>
      </div>
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
    <div style="margin-bottom: -70px; height: 700px ;padding: 0px 475px;">
      <div class="p_chat">
      <p class="p_p1">即时聊天工具</p>
      <p class="p_p2">Instant Messaging Tools</p>
      <div class="p_chat_list">
        <div
          v-for="item in list2"
          :key="item.id"
          @mouseenter="mouseenter2(item)"
          style="margin: 0 10%;" >
          <div :class="{'box':true, 'a': show2==item.id}" style="height: 450px;">
            <div :class="{'box-hd':true,'b': show2==item.id}">
              <img style="height: 70px; width: 70px; margin-top:55px;" :src="item.img" alt="">
              <div class="box-title" style="font-size:19.97px; margin-bottom:70px;">{{item.title}}</div>
            </div>
            <div :class="{'box-desc':true, 'c':show2==item.id}" style="font-size:15.99px;">
              <div style="padding-top: 40px; padding-left:10px; padding-right:10px;">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="p_compay">
      <div>
        <p>厦门一零二四科技有限公司</p>
        <p>1024 TECHOLOGY CO., LTD</p>
        <p>厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与业务成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。</p>
        <p>公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与动成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。</p>
      </div>
    </div>
    <div class="p_dynm">
      <p class="p_p1">行业动态</p>
      <p class="p_p2">INDUSTRY INFORMATION</p>
      <span @click="goNewlist(1)" >更多动态 ></span>
      <div class="p_detail">
        <div  @click="gotoDetail(ArticleList[0])">
          <div class="p_num">
            <img src="../../assets/p12.png" alt />
          </div>
          <div style="cursor:pointer" class="p_item">
            <p class="p_item_title">{{ArticleList[0].title}}</p>
            <div class="p_dec">
              <div style="padding: 0 20px;">
              {{ArticleList[0].alias}}
              </div>
            </div>
            <div class="p_item_content">{{ArticleList[0].description}}</div>
            <div class="p_item_new">
              <div style="
                width:71px; height:12px;
                font-size:12px; font-family:PingFang SC;
                font-weight:bold; color:rgba(204,204,204,1);
                line-height:30px;">
                {{ArticleList[0].created_at}}
              </div>
              <div style="
                width:50px; height:12px;
                font-size:12px; font-family:PingFang SC;
                font-weight:bold; color:rgba(204,204,204,1);
                line-height:30px;">
                详细信息 >
              </div>
            </div>
          </div>
        </div>
        <div  @click="gotoDetail(ArticleList[1])">
          <div class="p_num">
            <img src="../../assets/p11.png" alt />
          </div>
          <div style="cursor:pointer" class="p_item">
            <p class="p_item_title">{{ArticleList[1].title}}</p>
            <div class="p_dec">
              <div style="padding: 0 20px;">
              {{ArticleList[1].alias}}
              </div>
            </div>
            <div class="p_item_content">{{ArticleList[1].description}}</div>
            <div class="p_item_new">
              <div style="
                width:71px; height:12px;
                font-size:12px; font-family:PingFang SC;
                font-weight:bold; color:rgba(204,204,204,1);
                line-height:30px;">
                {{ArticleList[1].created_at}}
              </div>
              <div style="
                width:50px; height:12px;
                font-size:12px; font-family:PingFang SC;
                font-weight:bold; color:rgba(204,204,204,1);
                line-height:30px;">
                详细信息 >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p_hezuo">
      <p class="p_p1">合作机构</p>
      <p class="p_p2">COOPERATIVE ORGANIZATION</p>
      <div class="p_hezuo_list">
        <div style="border-left: 1px solid #c9c9c9;">
          <img style="height: 70%; margin-top: 10px;" src="../../assets/aly.png" alt />
        </div>
        <div>
          <img style="height: 62%; margin-top: 5px;" src="../../assets/tengxun.png" alt />
        </div>
        <div>
          <img style="height: 80%; margin-top: 5px;" src="../../assets/zfb.png" alt />
        </div>
        <div>
          <img style="height: 80%; margin-top: 5px;" src="../../assets/lanhu.png" alt />
        </div>
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

<script>
import Vue from 'vue';
import api from '../../utils/api';
import animated from 'animate.css';
Vue.use(animated)

export default {
  metaInfo: {
    title:'厦门一零二四科技有限公司',
    meta:[{
      name: 'Description',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案'
    }],
  },
  data() {
    return {
      show9:1,
      NavigationBar:[
        {id:1, data:'首页'},
        {id:2, data:'业务范围'},
        {id:3, data:'加入我们'},
        {id:4, data:'关于我们'}
      ],
      a:true,
      b:false,
      ArticleList:[],
      active: 1,
      show: false,
      show2:1,
      disappear:1,
      list3:[1],
      Zoom:true,
      list: [
        {
          id: 1,
          img: require("../../assets/p1.png"),
          content: "一键云生产",
          lag: "One Touch"
        },
        {
          id: 2,
          img: require("../../assets/p2.png"),
          content: "完美兼容各种机型",
          lag: "Perfect match"
        },
        {
          id: 3,
          img: require("../../assets/p3.png"),
          content: "功能模块化",
          lag: "Modularization"
        },
        {
          id: 4,
          img: require("../../assets/p4.png"),
          content: "超强数据统计",
          lag: "Data statistics"
        }
      ],
      list2: [
        {
          id: 1,
          img: require("../../assets/5.png"),
          title: "APP服务",
          content:
            "针对手机这种移动连接到互联网的业务或者无线网卡业务而开发的应用程序服务。通过新技术以及数据分析，APP可实现精准定位企业目标用户，整合LBS、QR、AR等新技术，带给用户前所未有的用户体验。"
        },
        {
          id: 2,
          img: require("../../assets/6.png"),
          title: "区块链",
          content:
            "分布式的共享账本和数据库，具有去中心化、不可篡改、全程留痕、可以追溯、集体维护、公开透明等特点，为区块链创造信任奠定基础，创造了可靠的合作机制，具有广阔的运用前景。"
        },
        {
          id: 3,
          img: require("../../assets/8.png"),
          title: "即时聊天工具",
          content:
            "当前最流行的互联网通讯工具，可以按自己的需求定制，有企业版本、社交娱乐版本、电子商务运营版本等等，快速实现强大的移动互联网IM和音视频功能，就像面对面讲话一样。"
        },
        {
          id: 4,
          img: require("../../assets/9.png"),
          title: "网站建设",
          content:
            "使用标识语言通过设计、建模、和执行的过程将电子格式的信息通过互联网传输，最终以图形用户界面的形式被用户所浏览。企业在互联网上建立自己的网站可以展示企业风采让更多人了解自己的企业。"
        },
        {
          id: 5,
          img: require("../../assets/8.png"),
          title: "小程序",
          content:
            "一种不需要下载安装即可使用的应用，它实现了应用触手可及的梦想，用户扫一扫或者搜一下即可打开应用。也体现了用完即走的理念，应用将无处不在，随时可用，但又无需安装卸载。"
        }
      ]
    };
  },
  created(){
    this.getArticle()
  },
  methods: {
    //获取文章列表
    getArticle(){
      let that = this;
      api.getArticleList({
        page_size:2,
        page_no:1
      }).then(res => {
        that.ArticleList = res.data.data.list;
        console.log(that.ArticleList);
        console.log(res);
      })
    },
    goto(x) {
      this.active = x;
      if(x==2){
        this.$router.push("/business")
      }else if(x==3){
        this.$router.push("/join")
      }else if(x==4){
        this.$router.push("/about")
      }
    },
    mouseenter2(item) {
      this.show2 = item.id;
    },
    mouseenter() {
      this.show = true;
    },
    mouseleave() {
      this.show = false;
    },
    gotoDetail(item){
      this.$router.push({
          path: `/newDetail/${item.id}`,
      });
    },
    mouseenter123(item){
      this.show9 = item;
      // console.log(item)
      console.log(this.show9)
    },
    mouseleave321(){
      this.show9 = 0
    },
    goNewlist(){
      this.$router.push("/new")
    }
  }
};
</script>
<style lang="less">
.p_home_container {
  height: 100%;
  width: 100%;

  .bg {
    position: relative;
  }

  .p_text3 {
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
  .p_catagory_list {
    width: 65%;
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
    justify-content: space-around;
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
    padding-top: 167px;
    height: 750px;
    width: 65%;
    margin: 0 auto;
    margin-bottom: 100px;
    .p_app_list {
      width: 100%;
      // height: 650px;
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
          // max-height: 350px;
          // transition:height 2s;
          text-align: left;
          padding: 0 24px;
          box-sizing: border-box;
          text-indent: 2em;
          margin: 10px 0 40px 0;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
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
    box-shadow: 0px 0px 8px 0px rgba(3, 22, 43, 0.1);
    border-radius: 10px;
  }
  .p_compay {
    height: 560px;
    // margin-top: 52px;
    background: url(../../assets/p10.png) no-repeat;
    > div {
      width: 53%;
      margin: 0 auto;
      padding: 92px 0 102px 0;
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
  .p_dynm {
    margin: 92px auto 0;
    width: 65%;
    position: relative;
    > span {
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      cursor: pointer;
      position: absolute;
      top: 30px;
      right: 0;
    }
    .p_detail {
      display: flex;
      width: 90%;
      margin: 20px auto;
      text-align: left;
      > div {
        flex: 1;
        display: flex;
        > .p_num {
          width: 10%;
          img {
            width: 50px;
            height: 50px;
            object-fit: contain;
          }
        }
        > .p_item {
          flex: 1;
          .p_item_title {
            padding-top: 30px;
            font-size: 30px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            line-height: 40px;
          }
          .p_dec {
            // width: 260px;
            // text-align: center;
            width:auto;
            display:inline-block !important; display:inline;
            height: auto;
            line-height: 32px;
            background: rgba(229, 238, 251, 1);
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            margin: 10px 0 20px 0;
          }
          .p_item_content {
            // width:520px;
            line-height: 23.99px;
            color: #999999;
            // line-height: 20px;
            // width: 520px;
            font-size: 13.99px;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .p_item_new {
            display: flex;
            padding-top: 10px;
            > div:nth-child(1) {
              flex: 1;
              text-align: left;
            }
            > div:nth-child(2) {
              flex: 1;
              text-align: right;
            }
          }
        }
      }
    }
  }
  .p_hezuo {
    padding-top: 92px;
    width: 100%;
    margin: 10px auto;
    // padding-left:100px ;
    // padding-right:100px ;
    > .p_hezuo_list {
      display: flex;
      height: 80px;
      margin-top: 30px;
      justify-content: space-between;
      margin-bottom: 101px;
      padding-left: 340px;
      padding-right: 340px;
      > div {
        width:50%;
        padding:10px ;
        box-sizing: border-box;
        border: 1px solid rgba(201, 201, 201, 1);
        border-left: 0px solid #c9c9c9;
        > img {
          object-fit: cover;
        }
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
          // overflow:hidden;
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
            transition: all 1s;
            position: absolute;
            margin-left: 23%;;
            top: 50%;
            transform: translateY(-50%);
          }
          .p_bg {
            // transition: all 1s;
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
  .toTheRight{
  }
  @media screen and (max-width: 1440px) {
    .font {
      width: 100px;
      height: 150px;
      // background: red;
      font-size: 10px;
    }
    .p_catagory_list{
      width: 90%;
    }
  }
  .box {
    width: 100px;
    height: 270px;
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
    height: 0px;
  }

  .box-title {
    margin-top:10px;
  }

.box-desc {
  // padding: 10px;
  height: 0px;
  overflow: hidden;
}

.box,
.box-hd,
.box-desc {
  transition:.5s;
}

.box:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0,.15);
}

.box:hover .box-hd {
  box-shadow: 0 0 10px rgba(0, 0, 0,.15);
}

.box:hover .box-desc {
  padding: 10px;
  // padding-bottom: 0px;

  // height: 170px;
}

.a {
  box-shadow: 0 0 10px rgba(0, 0, 0,.15);
  height: 200px;
}

.b {
  background:rgba(5,117,231,0.03);
}

.c {
  padding: 10px;
  height: 100px;
  padding-bottom: 0px;
}
// .Home:hover {
//   border: 1px solid red;
//   border-radius: 4px;
// }

@media screen and (max-width:1440px){
  // body {
  //   background-color: red;
  // }
  .c {
      height: 2000px;
  }
  .box:hover .box-desc {
      padding: 10px;
      height: 160px;
    }
    .p_home_container .p_app{
      height: 600px;
    }
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
    margin-top: 103px;
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
</style>
