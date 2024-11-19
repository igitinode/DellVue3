<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          'category-item': true,
          'category-item-active': currentTab === item.tab
        }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product-item" v-for="item in list" :key="item._id">
        <img class="product-item-img" :src="item.imgUrl" />
        <div class="product-item-detail">
          <h4 class="product-item-title">{{ item.name }}</h4>
          <p class="product-item-sales">月售{{ item.sales }}件</p>
          <p class="product-item-price">
            <span class="product-item-yen">&yen;{{ item.price }}</span>
            <span class="product-item-origin">&yen;{{ item.oldPrice }}</span>
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
import { reactive, ref, toRefs, watchEffect } from 'vue'
// import { get } from '@/utils/request';
// import { useRoute } from 'vue-router'
import {
  contentDataAll,
  contentDataSeckill,
  contentDataFruit
} from '@/json/contentData.js'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

// 和tab切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = tab => {
    currentTab.value = tab
  }

  return { currentTab, handleTabClick }
}

// 列表内容相关逻辑
const useCurrentListEffect = currentTab => {
  const content = reactive({
    list: []
  })
  // const route = useRoute()
  // const shopId = route.params.id
  const getContentData = () => {
    // const result = await get('/api/shop/${shopId}/products', {
    //   tab: currentTab.value
    // })
    let result = []
    if (currentTab.value === 'all') {
      result = contentDataAll()
    } else if (currentTab.value === 'seckill') {
      result = contentDataSeckill()
    } else {
      result = contentDataFruit()
    }
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }

  // 监控 getContentData 中的 currentTab 依赖
  // 首次加载、或 currentTab 改变变化也会立即执行
  watchEffect(() => {
    getContentData()
  })

  const { list } = toRefs(content)
  return { list }
}

export default {
  name: 'Content',
  setup() {
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab)
    return { currentTab, categories, handleTabClick, list }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
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
  background: $search-bgColor;

  &-item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: $content-fontcolor;
    &-active {
      background: $bgColor;
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
    border-bottom: 0.01rem solid $content-bgColor;

    &-detail {
      overflow: hidden;
    }

    &-img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &-title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &-sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }
    &-price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }
    &-yen {
      font-size: 0.12rem;
    }
    &-origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $ligt-fontColor;
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
        border: 0.01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }
      &-plus {
        background: $btnColor;
        color: $bgColor;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
