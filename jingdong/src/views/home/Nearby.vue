<template>
  <div class="nearby">
    <h3 class="nearby-title">附近店铺</h3>
    <shop-info
      v-for="item in nearbyList"
      :key="item.__id"
      :item="item"
    ></shop-info>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { get } from '@/utils/request'
import { nearByListData } from '@/json/nearbyListData.js'
import ShopInfo from '@/components/ShopInfo.vue'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = () => {
    // const result = await get('/api/shop/hot-list')
    // 下面是替代数据 重新赋值
    const result = nearByListData()
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }

  return { nearbyList, getNearbyList }
}
export default {
  name: 'Nearby',
  components: { ShopInfo },
  setup() {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.nearby {
  &-title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }

  a {
    text-decoration: none;
  }
}
</style>
