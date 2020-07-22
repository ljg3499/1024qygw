<template>
  <div
    class="swiper2"
    v-swipeleft="{fn:vueLeft,name:'左滑'}"
    v-swiperight="{fn:vueRight,name:'右滑'}"
  >
    <!--html code-->
    <div
      class="swiper_item"
      v-for="(item,index) in imgArr"
      :key="index"
      :class="caculateCalss(index)"
    >
      <div class="content">
        <img
          :src="item"
          alt=""
          class="swiper_img"
        >
        <div
          class="text_content"
          v-if="index===2"
        >
          <img
            src="../assets/chongwu.png"
            alt=""
            class="avatar_icon"
          >
          <div class="title">
            区块链-宠物养成游戏
          </div>
          <div class="desc">
            结合区块链技术，防止系统运营方随意更改系统商品及道具。玩家的区块链宠物数据存储与区块链上，数据安全有保证，不会因系统出现问题导致宠物丢失。保证玩家的信息及虚拟宠物资产存储于区块链上，即使系统运营方数据库被入侵，也不会导致玩家信息泄露或资产被盗。
          </div>
        </div>
        <div
          class="text_content"
          v-if="index===0"
        >
          <img
            src="../assets/heyue.png"
            alt=""
            class="avatar_icon"
          >
          <div class="title">
              区块链-智能应用合约
          </div>
          <div class="desc" v-if="index===0">
          智能合约是一段存储在区块链上的代码，该代码在区块链数据库中被写入和读取，由区块链交易触发。通过打造网络行为“自愿签约—自动履行—履行不能智能立案—智能审判—智能执行”的全流程闭环，提升智能合约执行效率，实现网络数据和网络行为的全流程记录、全方位协作。
          </div>
        </div>
        <div
          class="text_content"
          v-if="index===1"
        >
          <img
            src="../assets/qianbao.png"
            alt=""
            class="avatar_icon"
          >
          <div class="title">
            区块链-钱包
          </div>
          <div class="desc">
            提供更加便捷的链上资产交易服务，拥有账号和密钥两种方式创建账户，推荐生成区块链私钥、创建加密货币账户、完成区块链内交易转账，通过专业的安全系统，风控系统，冷热钱包系统，财务监控系统等，多维度保障数字资产安全。
          </div>
        </div>
      </div>
      <!-- <span class="test">{{ index }}</span> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'

export default {
  name: 'Swiper2',
  data () {
    return {
      activeIndex: 1,
      direction: '',
      imgArr: [img1, img2, img3]
    }
  },
  methods: {
    vueLeft () {
      this.direction = 'left'
      if (this.activeIndex === 2) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
    vueRight () {
      this.direction = 'right'
      if (this.activeIndex === 0) {
        this.activeIndex = 2
      } else {
        this.activeIndex--
      }
    },
    caculateCalss (index) {
      if (this.activeIndex === index) {
        return 'active'
      }

      if (this.direction === 'right') {
        if (this.activeIndex === 0) {
          if (index === this.imgArr.length - 1) {
            return 'left'
          }
          return 'right'
        } else if (this.activeIndex === this.imgArr.length - 1) {
          if (index === 0) {
            return 'right'
          }
          return 'left'
        } else {
          if (index === 0) {
            return 'left'
          } else if (index === 1) {
            return 'active'
          } else {
            return 'right'
          }
        }
      }
      if (this.direction === 'left') {
        if (this.activeIndex === 0) {
          if (index === this.imgArr.length - 1) {
            return 'left'
          }
          return 'right'
        } else if (this.activeIndex === this.imgArr.length - 1) {
          if (index === 0) {
            return 'right'
          }
          return 'left'
        } else {
          if (index === 0) {
            return 'left'
          } else if (index === 1) {
            return 'active'
          } else {
            return 'right'
          }
        }
      }
      // if (this.activeIndex > index) {
      //   return 'left'
      // } else {
      //   return 'right'
      // }
      if (!this.direction) {
        if (index === 0) {
          return 'left'
        } else if (index === 1) {
          return 'active'
        } else {
          return 'right'
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.swiper2 {
  /* less */
  position: relative;
  height: 440px;

  .swiper_item {
    position: absolute;
    top: 40px;
    z-index: 1;
    width: 440px;
    height: 360px;
    box-sizing: border-box;

    .content {
      position: relative;
      display: flex;
      height: 360px;

      .text_content {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        padding: 36px 40px;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;

        .avatar_icon {
          width: 44px;
          height: 44px;
        }

        .title {
          margin: 24px 0;
          font-size: 28px;
          color: #fff;
          text-align: center;
        }

        .desc {
          margin-top: -30px;
          font-size: 24px;
          line-height: 36px;
          color: #fff;
          transform: scale(.65);
        }
      }
    }

    &.active {
      top: 0;
      left: 155px;
      z-index: 2;
      height: 440px;

      .content {
        height: 440px;
      }
    }

    &.left {
      left: 0;
    }

    &.right {
      right: 0;
    }

    .swiper_img {
      width: 100%;
      // height: 440px;
    }

    .test {
      position: absolute;
      bottom: 200px;
      color: red;
    }
  }
}
</style>
