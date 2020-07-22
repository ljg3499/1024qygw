<template>
  <div class="p_home">
    <div class="p_banner">
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
          <div  @click="goto(item.id)"   @mouseleave="mouseleave321"
            :class="[show9 == item.id?'activeClass':'',active==item.id?'activeClass':'']" @mouseenter="mouseenter123(item.id)" v-for="item in NavigationBar" :key="item.id">{{item.data}}</div>
        </div>
      </div>
      <p class="p_text1">行业新闻动态</p>
      <p class="p_text2">最新最全面的新闻动态更新</p>
    </div>
    <div class="p_content">
      <p class="p_text3">
        您所在的位置：<span class="shouye" style="cursor:pointer;" @click="goHome">首页</span>
        <span class="xwdt" style="cursor:pointer;">/ 新闻动态</span>  <!-- / {{text}} -->
      </p>
      <div class="p_content_list">
        <div class="p_content_item" style="cursor:pointer" v-for="(item,index) in list" :key="index" @click="gotoDetail(item)">
          <div class="p_item">
            <div class="p_left">
              <img :src="item.image" alt="" style="height: 200px; width: 288px;">
            </div>
            <div class="p_right">
              <p>{{item.alias}}</p>
              <p>{{item.description}}</p>
              <div class="p_content_time">
                <span>{{item.created_at}}</span>
                <span>详细信息></span>
              </div>
            </div>
          </div>
        </div>
        <el-pagination
        background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :small="true"
          :current-page="currentPage4"
          :page-sizes="[10]"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="this.data.summary.count_total"
          @prev-click="pageChange"
          @next-click="pageChange2">
        </el-pagination>
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
              <img  src="../../assets/WechatIMG528.png" alt />
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
import api from '../../utils/api'
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

      show9:0,
      NavigationBar:[
        {id:1, data:'首页'},
        {id:2, data:'业务范围'},
        {id:3, data:'加入我们'},
        {id:4, data:'关于我们'}
      ],
      currentPage4: 1,
      active:0,
      show:false,
      text: "Netflix是品牌价值增长最快",
      list: [],
      page_size:10,
      page_no:1,
      data:""
    };
  },
  created(){
    this.getArticle()
  },
  methods: {
    pageChange(){
      this.page_no = this.page_no - 1;
      this.getArticle()
      console.log( this.page_no );
      console.log('上一页');
    },
    pageChange2(){
      this.page_no = this.page_no + 1;
      this.getArticle()
      console.log( this.page_no );
      console.log('下一页');
    },
    goHome(){
        this.$router.push("/");
    },
    getArticle(){
      api.getArticleList({
        page_size: this.page_size,
        page_no:this.page_no
      }).then(res =>{
        this.list = res.data.data.list;
        this.data = res.data.data;
        console.log(res.data.data.list);
      })
    },
    handleSizeChange(item) {
      this.page_no = item;
      this.getArticle();
      console.log( this.page_no );
      console.log(item);
    },
    handleCurrentChange(item) {
      this.page_no = item;
      this.getArticle();
      console.log( this.page_no );
      console.log(item);
    },
    mouseenter(){
      this.show = true
    },
    mouseleave(){
      this.show = false
    },
    goto(x) {
      this.active = x;
      if(x==2){
        this.$router.push("/business")
      }else if(x==1){
        this.$router.push("/")
      }else if(x==4){
        this.$router.push("/about")
      }else if(x==3){
        this.$router.push("/join")
      }
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
  }
};
</script>

<style lang="less">
// 大写PX不会被编译成rem
//pc端用大写PX 移动端用小写
// p_开头不会编译rem
.shouye {
 color: #737373;
}
.xwdt {
 color: #737373;

}
.shouye:hover{
  color: blue;
}
.xwdt:hover{
  color: blue;
}
.p_home {
  height: 100%;
  width: 100%;

  .p_banner {
    width: 100%;
    height: 600px;
    background: url(~@/assets/homeTop.png) no-repeat;
    padding: 20px 0;
    > .p_top {
      display: flex;
      .p_left {
        width: 31%;
        text-align: right;
        img {
          width: 172px;
          height: 41px;
        }
      }
      .p_right {
        flex: 1;
        display: flex;
        margin-left: 20%;
        > div {
          width: 88px;
          color: #fff;
          cursor: pointer;
          margin: 0 20px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .p_text1 {
      padding-top: 100px;
      font-size: 40px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      line-height: 100px;

      color: rgba(255, 255, 255, 1);
    }
    .p_text2 {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
    }
  }
  .p_content {
    width: 62%;
    margin: 0 auto;
    .p_text3 {
      text-align: left;

      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .p_content_list {
      .p_content_item {
        display: flex;
        height: 200px;
        flex-direction: column;
        flex-wrap: wrap;
        padding-bottom: 29px;
        margin: 30px 0;
        border-bottom: 1px solid rgba(203, 203, 203, 1);
        .p_item {
          display: flex;
          height: 100%;

          .p_left {
            width: 273px;
            // background: rgba(51, 51, 51, 1);
          }
          .p_right {
            flex: 1;
            text-align: left;
            margin-left: 28px;
            > p:nth-child(1) {
              font-size: 28px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
              line-height: 60px;
            }
            > p:nth-child(2) {
              font-size: 13px;
              font-family: PingFang SC;
              line-height: 24px;
              color: rgba(153, 153, 153, 1);
              word-break: break-all;
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .p_content_time {
              display: flex;
              line-height: 50px;
              > span {
                flex: 1;
                font-size: 13px;
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
    .p_code{

    }
  }
}
</style>
<style lang="less">
.p_home {
  /deep/.el-pagination {
    padding-bottom: 20px;
    text-align: right;
    display: block;
  }
}
.Home:hover {
  border: 1px solid #ffffff;
  border-radius: 4px;
}
</style>
