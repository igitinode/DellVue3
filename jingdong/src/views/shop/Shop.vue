<template>
  <div class="wrapper">
    <shop-info :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import {} from 'vue'
import ShopInfo from '@/components/ShopInfo.vue'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    const item = {
      __id: '111',
      name: '沃尔玛',
      imgUrl: '@/assets/near/near.png',
      sales: 100,
      expressLimit: 0,
      expressPrice: 5,
      tags: ['月售1万', '起送￥0', '基础运费￥5'],
      slogan: 'VIP尊享满89元减4元运费券（每月3张）'
    }

    return {
      item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.wrapper {
  padding: 0 0.18rem;
}
</style>
