<template>
  <div class="m_about_container">
    <div class="banner2">
      <!-- <p class="text1 textBg">厦门一零二四科技有限公司</p>
      <p class="text2">有趣的人 做有趣的事</p> -->
      <!-- <div class="text3">马上加入</div> -->
      <div class="logo"></div>
      <div class="meun" @click="meunShow =!meunShow"></div>
      <div class="meun_content" v-if="meunShow">
        <div v-for="item in meunList" :key="item.id" @click="gotoMeun(item)">{{item.name}}</div>
      </div>
    </div>
    <div class="m_job">
      <van-tree-select height="750px" :items="items" :main-active-index.sync="active">
        <template #content>
          <div v-if="active === 0">
            <p class="title">关于我们</p>
            <div class="title_2" style="text-indent:2em">
              厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与业务成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。
              公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与动成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。
              <br />
              <br /><div style="text-indent:2em">公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与动成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。</div>
            </div>
            <div class="img_box">
              <div class="img_boxs">
                <img src="../../assets/1-1.png" alt />
                <img src="../../assets/2-1.png" alt />
                <img src="../../assets/3-1.png" alt />
                <img src="../../assets/4-1.png" alt />
              </div>
            </div>
          </div>
          <div v-if="active === 1">
            <p class="title">友情链接</p>
            <p class="title_2" style="padding:20px 20px;">嗨！您好！如果您想和我们互换链接，请直接联系我们，谢谢！</p>
            <p class="title_2">
              我们的文字链接： 一零二四
              <br />以下排名不分先后，都是好基友。
            </p>
            <div style="margin:0px 20px 0;line-height:40px;text-align:left">
              <div v-for="lists in list" :key="lists.id">
                <span class="yuan"></span>&nbsp;
                <a :href="lists.url" class="text">{{lists.name}}</a>
              </div>
            </div>
          </div>
          <div v-if="active === 2">
            <p class="title">联系我们</p>
            <div style="margin:20px 0">
              <p class="title_2">1、合作联系QQ (点击可直接联系) ： {{configuration.data.qq}}</p>
              <p class="title_2">
                2、联系电话Tel (请直接说明来源) : {{configuration.data.mobile}}</p>
              <p class="title_2">
                3、发送邮件 Email：{{configuration.data.email}}
              </p>
            </div>
            <p class="title">给我们留言</p>
            <div class="form" style="padding: 0 25.5px;">
              <van-field required style="background:rgba(243,243,243,1); margin-top:29px; height: 35px;" v-model="name" placeholder="如何称呼您？" />
              <van-field required v-model="contact" placeholder="您的联系方式？" style="height: 35px;" />
              <van-field  style="background:rgba(243,243,243,1); border-radius:5px; height: 115px;"
              v-model="content" placeholder="请输入留言内容... ..." type="textarea" rows="4" />
              <van-button type="info" size="mini" style="font-size:14px; width:70px; height:30px;" block class="btn" @click="Submit">提交</van-button>
            </div>
          </div>
        </template>
      </van-tree-select>
    </div>
    <div
      class="footer"
    >COPYRIGHT 2018 厦门一零二四科技有限公司 XIAMEN YILINGERSI TECHNOLOGY CO.,LTD. 闽ICP备15008430号-1</div>
  </div>
</template>
<script>
import { Tab, Tabs, Field, Button, TreeSelect, Toast } from "vant";
import api from '../../utils/api'
export default {
  metaInfo: {
    title:'1024-关于我们',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    return {
      name: "",
      contact:"",
      content:"",
      active: 0,
      meunShow: false,
      items: [{ text: "关于我们" }, { text: "友情链接" }, { text: "联系我们" }],
      meunList:[
        {id:1,name:'首页'},
        {id:2,name:'业务范围'},
        {id:3,name:'加入我们'},
        {id:4,name:'关于我们'},
      ],
      list:[],
      configuration:""
    };
  },
  components: {
    [TreeSelect.name]: TreeSelect,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Field.name]: Field,
    [Button.name]: Button
  },
  created(){
    this.Links();
    this.GetTouch();
  },
  methods: {
     //获取联系方式
    GetTouch(){
      api.getContractUs()
      .then(res =>{
        this.configuration = res.data
        console.log(res.data)
        console.log(this.img)
      })
    },
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
                Toast(res.data.message)
                this.name = "";
                this.contact = "";
                this.content = "";
              }
            }
          }
        }
      })
    },
    //获取友情链接
    Links(){
      api.postPartner()
      .then(
        res =>{
          this.list = res.data.data
          console.log(this.list)
        }
      )
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
<style lang="less" scoped>
.m_job /deep/ .van-sidebar-item__text{
  font-size: 24px;
  margin-top:10px;
}
.m_about_container {
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
    .van-tree-select__nav-item {
      padding: 14px;
      // padding: 14px 2px;
    }
    .title {
      padding: 20px 35px 0;
      text-align: left;
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: 800;
      color: rgba(51, 51, 51, 1);
    }
    .title_1 {
      font-size: 22px;
      text-align: left;
      padding: 36px 35px 0;
      font-family: PingFang SC;
      font-weight: 800;
      color: rgba(51, 51, 51, 1);
    }
    .title_2 {
      padding: 20px 35px 0;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      text-align: left;
      color: rgba(51, 51, 51, 1);
      line-height: 32px;
    }
    .img_box {
      display: flex;
      flex-wrap: wrap;
      margin: 0 20px;
      .img_boxs {
        width: 100%;
        margin: 4px 20px;
        img {
          width: 100%;
          // height: 150px;
        }
      }
    }
    .yuan {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 1px solid rgba(51, 51, 51, 1);
      border-radius: 50%;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 400;
      text-decoration: underline;
      color: rgba(51, 51, 51, 1);
    }
    .btn {
      width: 120px;
      height: 60px;
      background: rgba(0, 121, 254, 1);
      border-radius: 5px;
      margin: 20px 20px;
    }
  }
  .footer {
    padding: 20px 0px;
    background: rgba(39, 39, 39, 1);
    opacity: 0.9;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    font-family: PingFang SC;

    color: rgba(101, 101, 101, 1);
  }
}
</style>
