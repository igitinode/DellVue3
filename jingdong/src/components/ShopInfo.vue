<template>
  <div class="shop">
    <img class="shop-img" src="@/assets/near/near.png" />
    <div
      :class="{
        'shop-content': true,
        'shop-content--bordered': hideBorder ? false : true
      }"
    >
      <div class="shop-content-title">{{ item.name }}</div>
      <div class="shop-content-tags">
        <span class="shop-content-tag">月售{{ item.sales }}</span>
        <span class="shop-content-tag">起送{{ item.expressLimit }}</span>
        <span class="shop-content-tag">运费￥{{ item.expressPrice }}</span>
      </div>
      <p class="shop-content-highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.shop {
  display: flex;
  padding-top: 0.12rem;

  &-img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }

  &-content {
    float: 1;
    padding-bottom: 0.12rem;
    &--bordered {
      border-bottom: 0.01rem solid $content-bgColor;
    }

    &-title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }

    &-tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
    }

    &-tag {
      margin-right: 0.16rem;
    }

    &-highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $hightlight-fontColor;
    }
  }
}
</style>
