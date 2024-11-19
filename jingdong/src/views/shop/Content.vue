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
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;

    &-img {
      width: 0.68rem;
      height: 0.68rem;
    }
  }
}
</style>
