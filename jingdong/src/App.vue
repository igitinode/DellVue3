<template>
  <div class="wrapper">
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
      <img class="banner-img" src="./assets/banner/image.png" />
    </div>
    <div class="icons">
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/01.png" />
        <p class="icons-item-desc">超市便利</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/02.png" />
        <p class="icons-item-desc">菜市场</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/03.png" />
        <p class="icons-item-desc">水果店</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/04.png" />
        <p class="icons-item-desc">鲜花绿植</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/05.png" />
        <p class="icons-item-desc">医药健康</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/06.png" />
        <p class="icons-item-desc">家居时尚</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/07.png" />
        <p class="icons-item-desc">烘焙蛋糕</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/08.png" />
        <p class="icons-item-desc">签到</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/09.png" />
        <p class="icons-item-desc">大牌免运</p>
      </div>
      <div class="icons-item">
        <img class="icons-item-img" src="./assets/icons/10.png" />
        <p class="icons-item-desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
  </div>
  <div class="docker">
    <span class="docker-item docker-item-active">
      <div class="iconfont">&#xe7a0;</div>
      <div class="docker-title">首页</div>
    </span>
    <span class="docker-item">
      <div class="iconfont">&#xe7e5;</div>
      <div class="docker-title">购物车</div>
    </span>
    <span class="docker-item">
      <div class="iconfont">&#xe60e;</div>
      <div class="docker-title">订单</div>
    </span>
    <span class="docker-item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker-title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem;
}
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
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01px solid $content-bgColor;
  color: $content-fontcolor;

  &-item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &-active {
      color: #1fa4fc;
    }
  }
  &-title {
    font-size: 0.2rem;
    // 浏览器最低只能显示12px像素的字体，通过缩放可以显示10px的值
    transform: scale(0.5, 0.5);
    // 缩放中心点
    transform-origin: center top;
  }
}
</style>
