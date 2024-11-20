import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层是商铺的id
      // shopId: {
      // 第二层是商品id
      // 第二层内容是商品以及购物数量
      // productId: {
      //   _id: '1',
      //   name: 'xxx',
      //   imgUrl: 'http:www',
      //   sales: 30,
      //   price: 33.6,
      //   oldPrice: 39.6,
      //   count: 2
      // }
      // }
    }
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }

      let product = shopInfo[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }

      product.count += num
      if (product.count < 0) {
        product.count = 0
      }

      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {},
  modules: {}
})
