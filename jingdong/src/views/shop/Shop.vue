<template>
  <div class="wrapper">
    <div class="search">
      <div class="search-back iconfont" @click="handleBackClick">&#xe602;</div>
      <div class="search-content">
        <span class="search-content-icon iconfont">&#xe802;</span>
        <input class="search-content-input" placeholder="请输入商品名称" />
      </div>
    </div>
    <shop-info :item="item" :hideBorder="true" />
  </div>
</template>

<script>
import {} from 'vue'
import { useRouter } from 'vue-router'
import ShopInfo from '@/components/ShopInfo.vue'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    const router = useRouter()
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
    const handleBackClick = () => {
      router.back()
    }
    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.wrapper {
  padding: 0 0.18rem;
}
.search {
  display: flex;
  margin: 0.2rem 0 0.16rem 0;
  line-height: 0.32rem;

  &-back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }

  &-content {
    display: flex;
    flex: 1;
    background-color: #f5f5f5;
    border-radius: 0.16rem;

    &-icon {
      width: 0.44rem;
      text-align: center;
      color: #b7b7b7;
    }

    &-input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      font-size: 0.14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>
