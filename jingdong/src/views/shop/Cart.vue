<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  ></div>
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product-header">
        <div class="product-header-all" @click="setCartItemsChecked(shopId)">
          <span
            class="product-header-icon iconfont"
            v-html="calculations.allChecked ? '&#xe652;' : '&#xe619;'"
          ></span>
          全选
        </div>
        <div class="product-header-clear">
          <span
            class="product-header-clear-btn"
            @click="cleanCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product-item" v-if="item.count > 0">
          <div
            class="product-item-checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe619;'"
            @click="changeCartItemChecked(shopId, item._id)"
          ></div>
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
      </template>
    </div>
    <div class="check">
      <div class="check-icon">
        <img
          src="@/assets/shop/basket.png"
          class="check-icon-img"
          @click="handleCartShowChange"
        />
        <div class="check-icon-tag">{{ calculations.total }}</div>
      </div>
      <div class="check-info">
        总计：<span class="check-info-price"
          >&yen; {{ calculations.price }}</span
        >
      </div>
      <div class="check-btn">
        <router-link :to="{ path: `/orderConfirmation/${shopId}` }"
          >去结算</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect, toggleCartEffect } from './commonCartEffect.js'

// 获取购物车逻辑
const useCartEffect = shopId => {
  const store = useStore()
  const { cartList, changeCartItemInfo } = useCommonCartEffect()
  const { showCart, handleCartShowChange } = toggleCartEffect()

  // 清空购物车
  const cleanCartProducts = shopId => {
    store.commit('cleanCartProducts', { shopId })
    // 数量为0,不显示购物车，showCart也要取反
    handleCartShowChange()
  }

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  // 设置全选
  const setCartItemsChecked = shopId => {
    store.commit('setCartItemsChecked', { shopId })
  }

  // 合并所有计算属性
  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    const result = { total: 0, price: 0, allChecked: true }
    if (productList) {
      for (let i in productList) {
        const product = productList[i]
        result.total += product.count
        if (product.check) {
          result.price += product.count * product.price
        }
        if (product.count > 0 && !product.check) {
          result.allChecked = false
        }
      }
    }
    result.price = result.price.toFixed(2)
    return result
  })

  // 从 store 获取购物车列表数据
  const productList = computed(() => {
    const productCards = cartList[shopId]?.productList || []
    return productCards
  })

  return {
    showCart,
    handleCartShowChange,
    calculations,
    productList,
    changeCartItemInfo,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked
  }
}

export default {
  name: 'Cart',
  setup() {
    const route = useRoute()
    const shopId = route.params.id
    const {
      showCart,
      handleCartShowChange,
      calculations,
      productList,
      cleanCartProducts,
      changeCartItemInfo,
      setCartItemsChecked,
      changeCartItemChecked
    } = useCartEffect(shopId)
    return {
      showCart,
      handleCartShowChange,
      shopId,
      calculations,
      productList,
      cleanCartProducts,
      changeCartItemInfo,
      setCartItemsChecked,
      changeCartItemChecked
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}

.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;

  &-header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid $content-bgColor;
    font-size: 0.14rem;
    color: $content-fontcolor;
    &-all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }

    &-icon {
      display: inline-block;
      margin-right: 0.1rem;
      vertical-align: top;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }

    &-clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;

      &-btn {
        display: inline-block;
      }
    }
  }

  &-item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;

    &-checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }

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
