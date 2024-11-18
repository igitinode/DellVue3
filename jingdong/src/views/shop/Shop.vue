<template>
  <div class="wrapper">
    <div class="search">
      <div class="search-back iconfont" @click="handleBackClick">&#xe602;</div>
      <div class="search-content">
        <span class="search-content-icon iconfont">&#xe802;</span>
        <input class="search-content-input" placeholder="请输入商品名称" />
      </div>
    </div>
    <shop-info :item="data.item" :hideBorder="true" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// import { get } from '@/utils/request'
import { shopDetail } from '@/json/shopDetail.js'
import ShopInfo from '@/components/ShopInfo.vue'

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    const router = useRouter()
    const data = reactive({
      item: {}
    })
    const getItemData = () => {
      // const result = await get('/api/shop/1')
      const result = shopDetail()
      if (result?.errno === 0 && result?.data) {
        data.item = result.data
      }
    }

    getItemData()
    console.log(data.item)

    const handleBackClick = () => {
      router.back()
    }
    return {
      data,
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
  margin: 0.14rem 0 0.04rem 0;
  line-height: 0.32rem;

  &-back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }

  &-content {
    display: flex;
    flex: 1;
    background-color: $search-bgColor;
    border-radius: 0.16rem;

    &-icon {
      width: 0.44rem;
      text-align: center;
      color: $search-fontcolor;
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
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
