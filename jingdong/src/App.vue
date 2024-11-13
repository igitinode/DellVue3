<template>
  <div class="docker">
    <span class="docker-item">
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
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  background: green;

  .docker-item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    .docker-title {
      font-size: 20px;
      // 浏览器最低只能显示12px像素的字体，通过缩放可以显示10px的值
      transform: scale(0.5, 0.5);
      // 缩放中心点
      transform-origin: center top;
    }
  }
}
</style>
