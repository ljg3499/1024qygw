<template>
  <div class="home_container">
    <div class="banner">
      <!-- <p class="text1 textBg">先进的互联网解决方案提供</p>
      <p class="text2">同样的价格 更好的选择</p>
      <div class="text3">查看详情</div> -->
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
      <div v-for="item in list" :key="item.id">
        <img :src="item.img" alt />
        <p class="item_content">{{item.content}}</p>
        <p class="item_lag">{{item.lag}}</p>
      </div>
    </div>
    <div class="app">
      <p class="p1">全面的产品服务体验</p>
      <p class="p2">APP Services</p>
      <div class="a_list">
        <div v-for="item in list2" :key="item.id">
          <div class="left" style="background:#F7FBFE;">
            <img style="margin-top: 13px;height: 50px;" :src="item.img" alt />
            <div class="title" v-html="item.title"></div>
          </div>
          <div class="right">
            <div class="content" style="padding: 10px;">{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="compay">
      <div>
        <p>厦门一零二四科技有限公司</p>
        <p>1024 TECHOLOGY CO., LTD</p>
        <p style="">厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与业务成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。</p>
        <p>公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与动成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。</p>
      </div>
    </div>
    <div class="dynm">
      <p class="p1">行业动态</p>
      <p class="p2">INDUSTRY INFORMATION</p>
      <div class="detail">
        <div v-for="item in ArticleList" :key="item.id" @click="gotoDetail(item)">
          <div class="num">
            <!-- <img src="../../assets/p12.png" alt /> -->
            <img v-if="1 >= item.id" src="../../assets/p12.png" alt />
            <img v-if="item.id > 1" src="../../assets/p11.png" alt />
          </div>
          <div class="item">
            <p class="item_title" v-html="item.title"></p>
            <div class="dec" style="background:#edf3fc;">
                <div style="padding: 0 20px;">{{item.alias}}</div>
            </div>
            <div class="item_content">
              {{item.description}}
            </div>
            <div class="item_new">
              <div>{{item.created_at}}</div>
              <div>详细信息</div>
            </div>
          </div>
        </div>
      </div>
      <div class="more" @click="goNewlist">查看更多</div>
    </div>
    <div class="hezuo">
      <p class="p1">合作机构</p>
      <p class="p2">COOPERATIVE ORGANIZATION</p>
      <div class="hezuo_list">
        <div style="border-left: 1px solid rgba(201, 201, 201, 1);">
          <img style="width:70%; " src="../../assets/aly.png" alt />
        </div>
        <div>
          <img style="width:80%;" src="../../assets/tengxun.png" alt />
        </div>
        <div style="border-left: 1px solid rgba(201, 201, 201, 1);border-bottom: 1px solid rgba(201, 201, 201, 1);">
          <img src="../../assets/zfb.png" alt />
        </div>
        <div style="border-bottom: 1px solid rgba(201, 201, 201, 1);">
          <img src="../../assets/lanhu.png" alt />
        </div>
      </div>
    </div>
    <div
      class="footer"
    >COPYRIGHT 2018 厦门一零二四科技有限公司 XIAMEN YILINGERSI TECHNOLOGY CO.,LTD. 闽ICP备15008430号-1</div>
  </div>
</template>
<style lang="less">
</style>
<script>
import api from '../../utils/api'
export default {
  metaInfo: {
    title:'厦门一零二四科技有限公司',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    return {
      item:"",
      active: 1,
      meunShow:false,
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
          title: "APP开发服务",
          content:
            "针对手机这种移动连接到互联网的业务或者无线网卡业务而开发的应用程序服务。通过新技术以及数据分析，APP可实现精准定位企业目标用户，整合LBS、QR、AR等新技术，带给用户前所未有的用户体验。"
        },
        {
          id: 2,
          img: require("../../assets/8.png"),
          title: "即时聊天工具",
          content:
            "当前最流行的互联网通讯工具，可以按自己的需求定制，有企业版本、社交娱乐版本、电子商务运营版本等等，快速实现强大的移动互联网IM和音视频功能，就像面对面讲话一样。"
        },
        {
          id: 3,
          img: require("../../assets/6.png"),
          title: "区块链",
          content:
            "分布式的共享账本和数据库，具有去中心化、不可篡改、全程留痕、可以追溯、集体维护、公开透明等特点，为区块链创造信任奠定基础，创造了可靠的合作机制，具有广阔的运用前景。"
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
      ],
      meunList:[
        {id:1,name:'首页'},
        {id:2,name:'业务范围'},
        {id:3,name:'加入我们'},
        {id:4,name:'关于我们'},
      ],
      ArticleList:[]
    };
  },
  created(){
    this.getArticle();
  },
  methods: {
    //获取文章列表
    getArticle(){
      api.getArticleList({
        page_size:2,
        page_no:1
      }).then(res =>{
        this.ArticleList = res.data.data.list
        console.log(this.ArticleList)
        console.log(res)
      })
    },
    gotoMeun(item){
      if(item.id==1){

      }else if(item.id==2){
          this.$router.push("/business")
      }else if(item.id==3){
          this.$router.push("/join")
      }else if(item.id==4){
          this.$router.push("/about")
      }
    },
    gotoDetail(item){
      this.$router.push({
          path: `/newDetail/${item.id}`,
      });
    },
    goNewlist(){
        this.$router.push("/new")
    }
  }
};
</script>
<style lang="less">
.home_container {
  height: 100%;
  width: 100%;

  .bg {
    position: relative;
    .textBg {
      font-size: 46px;
      line-height: 100px;
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
    height: 150px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 14px 2px rgba(3, 22, 43, 0.1);
    border-radius: 75px;
    position: absolute;
    left: 20px;
    padding: 10px 33px 0 33px;

    align-items: center;
    top: 370px;

    box-sizing: border-box;
    display: flex;
    > div {
      flex: 1;
      margin: 0 auto;
      > img {
        width: 41px;
        height: 41px;
        margin: 0 auto;
        display: block;
      }

      > .item_content {
        margin-top: 16px;
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      > .item_lag {
        font-size: 16.06px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .app {
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
  .p1 {
    font-size: 32px;
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
  .showText {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 8px 0px rgba(3, 22, 43, 0.1);
    border-radius: 10px;
  }
  .compay {
    height: 670px;
    margin-top: 60px;
    background: url(../../assets/p10.png) no-repeat;
    background-size: cover;
    > div {
      margin: 0 auto;
      padding: 80px 48px 86px 48px;
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
        font-size: 20px;
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
        font-size: 20px;
        padding-top: 38px;
        box-sizing: border-box;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 36px;
      }
    }
  }
  .dynm {
    margin: 76px auto 0;

    .detail {
      display: flex;
      flex-direction: column;
      margin: 20px auto;
      text-align: left;
      > div {
        flex: 1;
        padding: 0 20px;
        display: flex;
        margin: 20px 0;
        > .num {
          width: 10%;
          img {
            width: 50px;
            height: 50px;
            object-fit: contain;
          }
        }
        > .item {
          flex: 1;
          padding-right: 10px ;
          .item_title {
            padding-top: 40px;
            font-size: 38px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            line-height: 24px;
          }
          .dec {
            width:auto;
            display:inline-block !important; display:inline;
            margin: 20px 0;
            background: rgba(237, 243, 252, 1);
            font-size: 24px;
            // width: 330px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 36px;
          }
          .item_content {
            text-indent: 2em;
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(153, 153, 153, 1);
            line-height: 40px;
            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .item_new {
            display: flex;
            padding-top: 10px;

            font-size: 18px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(204, 204, 204, 1);

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
    .more {
      width: 600px;
      height: 80px;
      background: rgba(23, 126, 239, 1);
      border-radius: 10px;
      margin: 0 auto;
      line-height: 80px;
      font-size: 28px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  .hezuo {
    margin-top: 80px;

    margin: 80px auto 0;

    > .hezuo_list {
      display: flex;
      padding:40px 60px;
      flex-wrap: wrap;
      justify-content: space-between;
      > div {
        width: 315px;
        border: 1px solid rgba(201, 201, 201, 1);
        height: 115px;
        padding:20px;
        box-sizing: border-box;
        border-left: 0px solid;
        border-bottom: 0px solid;
        > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .footer {
    padding: 20px 0px;
    background: rgba(39, 39, 39, 1);
    opacity: 0.9;
    text-align: center;
    font-size: 12px;
    font-family: PingFang SC;
    color: rgba(101, 101, 101, 1);
  }
}
</style>
