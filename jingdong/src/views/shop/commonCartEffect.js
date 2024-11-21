import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'

// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  return { cartList, changeCartItemInfo }
}

// 展示隐藏购物车逻辑
export const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange }
}
