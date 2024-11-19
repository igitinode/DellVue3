<template>
  <div class="content">
    <div class="category">
      <div class="category-item category-item-active">全部商品</div>
      <div class="category-item">秒杀</div>
      <div class="category-item">新鲜水果</div>
      <div class="category-item">休闲水果</div>
      <div class="category-item">时令蔬菜</div>
      <div class="category-item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product-item">
        <img class="product-item-img" src="@/assets/banner/image.png" />
        <div class="product-item-detail">
          <h4 class="product-item-title">番茄25g0/份</h4>
          <p class="product-item-sales">月售10件</p>
          <p class="product-item-price">
            <span class="product-item-yen">&yen;33.6</span>
            <span class="product-item-origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product-number">
          <span class="product-number-minus">-</span>
          0
          <span class="product-number-plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {} from 'vue'
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  width: 0.76rem;
  height: 100%;
  background: #f5f5f5;

  &-item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;
    &-active {
      background: #fff;
    }
  }
}

.product {
  overflow-y: scroll;
  flex: 1;

  &-item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;

    &-img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &-title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
    }
    &-sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: #333;
    }
    &-price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &-yen {
      font-size: 0.12rem;
    }
    &-origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product-number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;

      &-minus,
      &-plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        line-height: 0.16rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
      }
      &-minus {
        border: 0.01rem solid #666;
        color: #666;
        margin-right: 0.05rem;
      }
      &-plus {
        background: #0091ff;
        color: #fff;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
