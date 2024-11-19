<template>
  <div class="cart">
    <div class="check">
      <div class="check-icon">
        <img src="@/assets/shop/basket.png" class="check-icon-img" />
        <div class="check-icon-tag">1</div>
      </div>
      <div class="check-info">
        总计：<span class="check-info-price">&yen; 128</span>
      </div>
      <div class="check-btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  setup() {}
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &-icon {
    position: relative;
    width: 0.84rem;

    &-img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }

    &-tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &-info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &-price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &-btn {
    width: 0.98rem;
    background-color: $btn-bgColor;
    text-align: center;
    font-size: 0.14rem;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
