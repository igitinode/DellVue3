<template>
  <div class="wrapper">
    <div class="position">
      <span class="iconfont position-icon">&#xe61f;</span>
      北京理工大学国防科技园2号楼10层308宿舍
      <span class="iconfont position-notice">&#xe60b;</span>
    </div>
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
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01px solid #f1f1f1;
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
