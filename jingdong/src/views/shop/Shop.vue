<template>
  <div class="wrapper">
    <div class="search">
      <div class="search-back iconfont" @click="handleBackClick">&#xe602;</div>
      <div class="search-content">
        <span class="search-content-icon iconfont">&#xe802;</span>
        <input class="search-content-input" placeholder="请输入商品名称" />
      </div>
    </div>
    <!-- 添加v-show是防止加载裂图效果 -->
    <shop-info :item="item" :hideBorder="true" v-show="item.imgUrl" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import { get } from '@/utils/request'
import { shopDetail } from '@/json/shopDetail.js'
import ShopInfo from '@/components/ShopInfo.vue'

// 获取当前商铺信息
const useShopInfoEffect = () => {
  // 当前路由的信息
  const route = useRoute()
  const shopid = route.params.id
  const data = reactive({
    id: shopid,
    item: {}
  })
  const getItemData = () => {
    // const result = await get(`/api/shop/${route.params.id}`)
    const result = shopDetail()
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 点击回退逻辑
const useBackRouterEffect = () => {
  // 当前整个大的路由
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Shop',
  components: { ShopInfo },
  setup() {
    // 只包含流程
    const { item, getItemData } = useShopInfoEffect()
    const { handleBackClick } = useBackRouterEffect()
    getItemData()
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
