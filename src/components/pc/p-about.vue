<template>
  <div style="background: #F0F4FB;" class="p_about_container">
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
          <div @click="goto(item.id)"   @mouseleave="mouseleave321"
            :class="[show9 == item.id?'activeClass':'',active==item.id?'activeClass':'']" @mouseenter="mouseenter123(item.id)" v-for="item in NavigationBar" :key="item.id">{{item.data}}</div>
        </div>
      </div>
    </div>
    <div class="p_content">
      <el-tabs style="height:950px;" :tab-position="tabPosition">
        <el-tab-pane label="关于我们">
          <p class="p_title">关于我们</p>
          <br />
          <div class="p_title_2">
            <div style="text-indent:2em;">厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与业务成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。
            公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与动成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。</div>
            <br />
            <div style="text-indent:2em;">
              公司依靠诚信、正直的服务理念与客户建立长期的合作伙伴关系，帮助客户在组织、技术、服务等方面搭建起高效的流程，让IT系统成为客户智慧管理与动成长的重要推动力，并以专业的技术队伍帮助客户运营好IT系统，充分发挥IT系统价值。
            </div>
          </div>
          <br />
          <div class="p_img_box">
            <div class="p_img" >
              <div style="display: flex; ">
                <img style="object-fit: contain; margin-right: 10px;" src="../../assets/1-1.png" alt />
                <img style="object-fit: contain;" src="../../assets/2-1.png" alt />
              </div>
              <div style="display: flex; margin-top: 10px;">
                <img style="object-fit: contain; margin-right: 10px;" src="../../assets/3-1.png" alt />
                <img style="object-fit: contain;" src="../../assets/4-1.png" alt />
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="友情链接">
          <p class="p_title" style="font-size: 17.99px;">友情链接</p>
          <p class="p_title_2" style="padding:20px 0; padding-bottom:10px; font-size: 17.99px;">嗨！您好！如果您想和我们互换链接，请直接联系我们，谢谢！</p>
          <p style="font-size: 17.99px;">
            我们的文字链接： 一零二四
            <br />以下排名不分先后，都是好基友。
          </p>
          <div style="margin-top:20px;line-height:40px; font-size: 17.99px;">
            <!-- <span class="p_yuan"></span>
            <span class="text">百度</span>
            <br /> -->
            <div v-for="lists in list" :key="lists.id">
                <span class="p_yuan"></span>&nbsp;
                <a :href="lists.url" class="text">{{lists.name}}</a>
              </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="联系我们">
          <p class="p_title">联系我们</p>
          <div style="margin:20px 0">
            <p class="p_title_2">1、合作联系QQ (点击可直接联系) ： {{configuration.data.qq}}</p>
            <p class="p_title_2">
              2、联系电话Tel (请直接说明来源) : {{configuration.data.mobile}}
            </p>
            <p class="p_title_2">
              3、发送邮件 Email：{{configuration.data.email}}
            </p>
          </div>
          <p class="p_title" style="margin-bottom:20px">给我们留言</p>
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item>
              <el-input
                v-model="form.name"
                placeholder="如何称呼您？"
                style="width:380px;margin-right:40px"
              ></el-input>
            </el-form-item>
            <el-form-item >
              <el-input v-model="form.contact" @change="tel" placeholder="您的联系方式？" style="width:380px" size="medium" maxlength="11"></el-input>
            </el-form-item>
            <br />
            <el-form-item>
              <el-input
                v-model="form.content"
                placeholder="请输入留言内容... ..."
                type="textarea"
                style="width:814px"
                :autosize="{ minRows: 9, }"
              ></el-input>
            </el-form-item>
            <br />
            <el-form-item>
              <el-button style="background:#0079FE;" type="primary" @click="Submit">提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
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
import api from '../../utils/api'
import { Message } from 'element-ui'
export default {
  metaInfo: {
    title:'1024-关于我们',
    meta:[{
      name: 'keywords',
      content: '厦门一零二四科技有限公司于2018年8月创立于厦门，主要从事：软件开发与实施、IT服务运营外包、区块链技术输出和新营销解决方案。'
    }]
  },
  data() {
    const validatePhone = (rule, value, callback) => {
      let regPhone = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号码'))
      } else {
        callback()
      }
    }
    return {
      show9:4,
      NavigationBar:[
        {id:1, data:'首页'},
        {id:2, data:'业务范围'},
        {id:3, data:'加入我们'},
        {id:4, data:'关于我们'}
      ],
      show: false,
      active: "4",
      tabPosition: "left",
      form: {
        name: "",
        contact:"",
        content:""
      },
      list:[],
      configuration:"",
      img:[
        '../../assets/1-1.png',
        '../../assets/2-1.png',
        '../../assets/3-1.png',
        '../../assets/4-1.png'
      ]
    };
  },
  created(){
    this.Links();
    this.GetTouch();
  },
  methods: {
    tel: function() {
      if (!/^1[345789]\d{9}$/.test(this.form.contact)) {
        Message("请输入正确的手机号");
        this.form.contact = "";
        // return;
      }
    },
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
                Message(res.data.message)
              }
            }
          }
        }
      })
    },
     mouseleave321(){
      this.show9 = 0
    },
    //获取友情链接
    Links(){
      api.postPartner()
      .then(
        res =>{
          this.list = res.data.data
          // console.log(this.list)
        }
      )
    },
    goto(x) {
      this.active = x;
      if(x==2){
          this.$router.push("/business")
      }else if(x==3){
          this.$router.push("/join")
      }else if(x==1){
          this.$router.push("/")
      }
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
.p_about_container {
  width: 100%;
  height: 100%;

  .bg {
    // position: relative;
    background: url("../../assets/about.png") no-repeat;
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
    .el-tabs--left .el-tabs__nav-wrap.is-left{
        width: 150px;
    }

       .el-tabs--left .el-tabs__item.is-left{
    text-align: inherit;

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
        text-indent: 2em;
        color: rgba(51, 51, 51, 1);
      }
      .p_title_2 {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 32px;
      }
      .p_img_box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .p_img {
          // width: 49.5%;
          margin: 4px 0;
          img {
            // width: 370px;
            // height: 200px;
          }
        }
      }
      .p_yuan {
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
