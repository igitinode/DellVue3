<template>
  <div class="cart">
    <div class="product">
      <div class="product-item" v-for="item in productList" :key="item._id">
        <img class="product-item-img" :src="item.imgUrl" />
        <div class="product-item-detail">
          <h4 class="product-item-title">{{ item.name }}</h4>
          <p class="product-item-price">
            <span class="product-item-yen">&yen;{{ item.price }}</span>
            <span class="product-item-origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product-number">
          <span
            class="product-number-minus"
            @click="changeCartItemInfo(shopId, item._id, item, -1)"
            >-</span
          >
          {{ item.count }}
          <span
            class="product-number-plus"
            @click="changeCartItemInfo(shopId, item._id, item, 1)"
            >+</span
          >
        </div>
      </div>
    </div>
    <div class="check">
      <div class="check-icon">
        <img src="@/assets/shop/basket.png" class="check-icon-img" />
        <div class="check-icon-tag">{{ total }}</div>
      </div>
      <div class="check-info">
        总计：<span class="check-info-price">&yen; {{ price }}</span>
      </div>
      <div class="check-btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// 获取购物车逻辑
const useCartEffect = shopId => {
  const store = useStore()
  const cartList = store.state.cartList
  // 数量
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (let item in productList) {
        const product = productList[item]
        count += product.count
      }
    }
    return count
  })
  // 总价
  const price = computed(() => {
    const productList = cartList[shopId]
    let totalPrice = 0
    if (productList) {
      for (let item in productList) {
        const product = productList[item]
        totalPrice += product.count * product.price
      }
    }
    // 保留两位小数
    return totalPrice.toFixed(2)
  })

  // 从 store 获取购物车列表数据
  const productList = computed(() => {
    const productCards = cartList[shopId] || []
    return productCards
  })

  return { total, price, productList }
}

export default {
  name: 'Cart',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList } = useCartEffect(shopId)
    return { total, price, productList }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.product {
  overflow-y: scroll;
  flex: 1;
  background: #fff;

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
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &-title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &-price {
      margin: 0.06rem 0 0 0;
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

.check {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;
  &-icon {
    position: relative;
    width: 0.84rem;

    &-img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }

    &-tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }
  &-info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;
    &-price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }
  &-btn {
    width: 0.98rem;
    background-color: $btn-bgColor;
    text-align: center;
    font-size: 0.14rem;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
