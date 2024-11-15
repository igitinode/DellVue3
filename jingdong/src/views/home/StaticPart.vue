<template>
  <div class="position">
    <span class="iconfont position-icon">&#xe61f;</span>
    北京理工大学国防科技园2号楼10层308宿舍
    <span class="iconfont position-notice">&#xe60b;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe802;</span>
    <span class="search-text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner-img" src="@/assets/banner/image.png" />
  </div>
  <div class="icons">
    <div class="icons-item" v-for="item in iconsList" :key="item.key">
      <img
        class="icons-item-img"
        :src="require('@/assets/icons/' + item.key + '.png')"
      />
      <p class="icons-item-desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
import {} from 'vue'
export default {
  name: 'StaticPart',
  setup() {
    const iconsList = [
      { imgName: '超市', key: '01', desc: '超市便利' },
      { imgName: '菜市场', key: '02', desc: '菜市场' },
      { imgName: '水果店', key: '03', desc: '水果店' },
      { imgName: '鲜花', key: '04', desc: '鲜花绿植' },
      { imgName: '医药健康', key: '05', desc: '医药健康' },
      { imgName: '家居', key: '06', desc: '家居时尚' },
      { imgName: '蛋糕', key: '07', desc: '烘焙蛋糕' },
      { imgName: '签到', key: '08', desc: '签到' },
      { imgName: '大牌免运', key: '09', desc: '大牌免运' },
      { imgName: '红包', key: '10', desc: '红包套餐' }
    ]

    return { iconsList }
  }
}
</script>

<style lang="scss">
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;

  .position-icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }

  .position-notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;

  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }

  &-text {
    display: inline-block;
    font-size: 0.14rem;
    color: $content-fontcolor;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  // 以上代码解决图片延迟加载抖动效果，提前撑开预固定高度

  &-img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &-item {
    width: 20%;

    &-img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }

    &-desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
