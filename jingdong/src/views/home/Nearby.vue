<template>
  <div class="nearby">
    <h3 class="nearby-title">附近店铺</h3>
    <div class="nearby-item" v-for="item in nearbyList" :key="item.__id">
      <img class="nearby-item-img" src="@/assets/near/near.png" />
      <div class="nearby-content">
        <div class="nearby-content-title">{{ item.name }}</div>
        <div class="nearby-content-tags">
          <span class="nearby-content-tag">月售{{ item.sales }}</span>
          <span class="nearby-content-tag">起送{{ item.expressLimit }}</span>
          <span class="nearby-content-tag">运费￥{{ item.expressPrice }}</span>
        </div>
        <p class="nearby-content-highlight">{{ item.slogan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
// import { get } from '@/utils/request'
import { nearByListData } from '@/json/nearbyListData.js'

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

  &-item {
    display: flex;
    padding-top: 0.12rem;

    &-img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &-content {
    float: 1;
    padding-bottom: 0.12rem;
    border-bottom: 0.01rem solid $content-bgColor;

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
      color: #e93b3b;
    }
  }
}
</style>
