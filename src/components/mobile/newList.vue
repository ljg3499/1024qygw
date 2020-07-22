<template>
  <div class="m_home">
    <div class="banner5">
      <!-- <p>行业新闻动态</p>
      <p>最新最全面的新闻动态更新</p> -->
     <div class="logo"></div>
      <div class="meun" @click="meunShow =!meunShow"></div>
      <div class="meun_content" v-if="meunShow">
        <div v-for="item in meunList" :key="item.id" @click="gotoMeun(item)">{{item.name}}</div>
      </div>
    </div>
    <div class="content">
      <div class="content_item" v-for="item in list" :key="item.id" @click="gotoDetail(item)">
        <div class="item">
          <div class="left"></div>
          <div class="right">
            <p>{{item.title}}</p>
            <p>{{item.description}}</p>
            <div class="content_time">
              <span>{{item.created_at}}</span>
              <span>详细信息></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>
      <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
    </div> -->
    <div
      class="footer"
    >COPYRIGHT 2018 厦门一零二四科技有限公司 XIAMEN YILINGERSI TECHNOLOGY CO.,LTD. 闽ICP备15008430号-1</div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Pagination } from 'vant';
import api from '../../utils/api';

Vue.use(Pagination);
export default {
  metaInfo: {
    title:'1024-新闻动态',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    return {
      currentPage:1,
      meunShow: false,
      meunList:[
        {id:1,name:'首页'},
        {id:2,name:'业务范围'},
        {id:3,name:'加入我们'},
        {id:4,name:'关于我们'},
      ],
      list: []
    };
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle(){
      api.getArticleList({
        page_size:5,
        page_no:1
      }).then(res =>{
        this.list = res.data.data.list;
        console.log(res.data.data.list);
      })
    },
    gotoDetail(item){
      this.$router.push({
          path: `/newDetail/${item.id}`,
      });
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
.m_home {

  .content {
    margin: 0 30px;
    height: 1200px;
    .content_item {
      display: flex;
      height: 180px;
      flex-direction: column;
      flex-wrap: wrap;
      padding-bottom: 29px;
      margin: 30px 0;
      border-bottom: 1px solid rgba(203, 203, 203, 1);
      .item {
        display: flex;
        height: 100%;

        .left {
          width: 36%;
          background: rgba(51, 51, 51, 1);
        }
        .right {
          flex: 1;
          text-align: left;
          margin-left: 28px;
          > p:nth-child(1) {
            font-size: 28px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            line-height: 50px;
          }
          > p:nth-child(2) {
            font-size: 20px;
            font-family: PingFang SC;
            line-height: 35px;
            color: rgba(153, 153, 153, 1);

            word-break: break-all;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .content_time {
            display: flex;

            > span {
              flex: 1;
              font-size: 18px;
              font-family: PingFang SC;

              color: rgba(203, 203, 203, 1);
            }
            > span:nth-child(1) {
              text-align: left;
            }
            > span:nth-child(2) {
              text-align: right;
            }
          }
        }
      }
    }
  }
  .footer {
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
