import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 第一层是商铺的id
      // shopId: {
      // 第二层是商品id
      // 第二层内容是商品以及购物数量
      // shopName: '沃尔玛',
      // productList: {
      //   productId: {
      //     _id: '1',
      //     name: 'xxx',
      //     imgUrl: 'http:www',
      //     sales: 30,
      //     price: 33.6,
      //     oldPrice: 39.6,
      //     count: 2
      //   }
      // }
    }
  },
  getters: {},
  mutations: {
    changeCartItemInfo(state, payload) {
      const { shopId, productId, productInfo, num } = payload
      let shopInfo = state.cartList[shopId] || { shopName: '', productList: {} }

      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
        product.check = 0
      }

      product.count += num
      if (payload.num > 0) {
        product.check = true
      }
      if (product.count < 0) {
        product.count = 0
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    },
    changeShopName(state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
    },
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload
      const productItem = state.cartList[shopId].productList[productId]
      productItem.check = !productItem.check
    },
    cleanCartProducts(state, payload) {
      const { shopId } = payload
      state.cartList[shopId].productList = {}
    },
    setCartItemsChecked(state, payload) {
      const { shopId } = payload
      const products = state.cartList[shopId].productList
      if (products) {
        for (let key in products) {
          const product = products[key]
          product.check = true
        }
      }
    }
  },
  actions: {},
  modules: {}
})
