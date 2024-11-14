<template>
  <div class="docker">
    <span
      v-for="(item, index) in dockerList"
      :key="index"
      :class="{ 'docker-item-active': index === 0 }"
      class="docker-item"
    >
      <!--图标特殊字符会被转义,所以要写v-html -->
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker-title">{{ item.text }}</div>
    </span>
  </div>
</template>

<script>
import {} from 'vue'
export default {
  name: 'Docker',
  setup() {
    const dockerList = [
      { icon: '&#xe7a0;', text: '首页' },
      { icon: '&#xe7e5;', text: '购物车' },
      { icon: '&#xe60e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]

    return { dockerList }
  }
}
</script>

<style lang="scss">
@import '@/style/viriables.scss';
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01px solid $content-bgColor;
  color: $content-fontcolor;

  &-item {
    flex: 1;
    text-align: center;

    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &-active {
      color: #1fa4fc;
    }
  }
  &-title {
    font-size: 0.2rem;
    // 浏览器最低只能显示12px像素的字体，通过缩放可以显示10px的值
    transform: scale(0.5, 0.5);
    // 缩放中心点
    transform-origin: center top;
  }
}
</style>
