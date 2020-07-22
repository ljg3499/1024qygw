<template>
  <div class="m-newDetail">
     <div class="banner5">
      <!-- <p class="text1 textBg">先进的互联网解决方案提供</p>
      <p class="text2">同样的价格 更好的选择</p>
      <div class="text3">查看详情</div> -->
      <div class="logo"></div>
      <div class="meun" @click="meunShow =!meunShow"></div>
      <div class="meun_content" v-if="meunShow">
        <div v-for="item in meunList" :key="item.id" @click="gotoMeun(item)">{{item.name}}</div>
      </div>
    </div>
    <div class="content">
      <div class="newdetail">
        <p>{{data.alias}}</p>
        <div class="time">
          <span>发布人：{{ data.publisher }}</span>
          <span>{{data.created_at}}</span>
        </div>
        <div class="detail_content" v-html="data.body">
        </div>
      </div>
    </div>
    <div class="goback" @click="goback">返回上一层</div>
    <div
      class="footer"
    >COPYRIGHT 2018 厦门一零二四科技有限公司 XIAMEN YILINGERSI TECHNOLOGY CO.,LTD. 闽ICP备15008430号-1</div>
  </div>
</template>
<script>
import api from '../../utils/api'
export default {
  metaInfo: {
    title:'1024-新闻详情',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    return {
      data:"",
      meunShow: false,
      meunList:[
        {id:1,name:'首页'},
        {id:2,name:'业务范围'},
        {id:3,name:'加入我们'},
        {id:4,name:'关于我们'},
      ],
    };
  },
  created(){
      this.articleDetails();
  },
  methods: {
      // 获取文章详情
      articleDetails(){
        api.getArticleDetails({
          id:this.$route.params.id
        })
        .then(
          (res) => (
            this.data =res.data.data,
            conso.log(this.data)
          )
        )
      },
      goback(){
        this.$router.go(-1)
      },
      gotoMeun(item) {
      if (item.id == 1) {
        this.$router.push("/");
      } else if (item.id == 2) {
        this.$router.push("/business");
      } else if (item.id == 3) {
          this.$router.push("/join");
      } else if (item.id == 4) {
      }
    }
  }
};
</script>
<style lang="less">
.m-newDetail {

  .content {
    margin: 0 30px;
    .newdetail {
      > p {
        margin-top: 30px;
        font-size: 32px;
        font-family: PingFang SC;
        // font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
      .time {
        padding-top: 10px;
        font-size: 16px;
        font-family: PingFang SC;

        color: rgba(204, 204, 204, 1);
        > span:nth-child(1) {
          padding-right: 40px;
        }
        > span:nth-child(2) {
        }
      }
      .detail_content{
          >p{
            margin:20px 0;
            text-indent: 2em;
            text-align: left;
            font-size:20px;
            font-family:PingFang SC;
            // font-weight:bold;
            // color:rgba(51,51,51,1);
            line-height:36px;

          }
          img{
              width:500px;
              height:260px;
          }
      }
    }

  }
  .goback{
       width:600px;

        height:80px;
        margin:20px auto;
        background:rgba(23,126,239,1);
        border-radius:10px;

         text-align: center;
        font-size:28px;
        font-family:PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:80px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    padding: 20px 0px;
    background: rgba(39, 39, 39, 1);
    opacity: 0.9;
    line-height: 39px;
    text-align: center;
    font-size: 12px;
    font-family: PingFang SC;

    color: rgba(101, 101, 101, 1);
  }
}
</style>
