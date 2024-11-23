<template>
  <div class="wrapper">
    <div class="top">
      <div class="top-bgcor"></div>
      <div class="top-header">
        <div class="top-header-back iconfont">&#xe602;</div>
        确认订单
      </div>
      <div class="top-receiver">
        <div class="top-receiver-title">收货地址</div>
        <div class="top-receiver-address">北京理工大学国防科技园2号楼10层</div>
        <div class="top-receiver-info">
          <span class="top-receiver-info-name">XXX 先生</span>
          <span class="top-receiver-info-name">12345678999</span>
        </div>
        <div class="top-receiver-icon iconfont">&#xe602;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation',
  setup() {}
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
}
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-color: #fff;
  background-repeat: no-repeat;

  &-header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: #fff;
    text-align: center;
    font-size: 0.16rem;

    &-back {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }
  }
  &-receiver {
    position: absolute;
    left: 0.18rem;
    right: 0.18rem;
    bottom: 0;
    height: 1.11rem;
    background: #fff;
    border-radius: 0.04rem;

    &-title {
      line-height: 0.22rem;
      padding: 0.16rem 0 0.14rem 0.16rem;
      font-size: 0.16rem;
      color: #333;
    }
    &-address {
      line-height: 0.2rem;
      padding: 0 0.4rem 0 0.16rem;
      font-size: 0.14rem;
      color: #333;
    }
    &-info {
      padding: 0.06rem 0 0 0.16rem;

      &-name {
        margin-right: 0.06rem;
        line-height: 0.18rem;
        font-size: 0.12rem;
        color: #666;
      }
    }
    &-icon {
      transform: rotate(180deg);
      position: absolute;
      right: 0.16rem;
      top: 0.5rem;
      color: #666;
      font-size: 0.2rem;
    }
  }
}
</style>
