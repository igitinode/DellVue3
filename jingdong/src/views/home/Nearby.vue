<template>
  <div class="nearby">
    <h3 class="nearby-title">附近店铺</h3>
    <div class="nearby-item" v-for="item in nearbyList" :key="item.id">
      <img class="nearby-item-img" src="@/assets/near/near.png" />
      <div class="nearby-content">
        <div class="nearby-content-title">{{ item.title }}</div>
        <div class="nearby-content-tags">
          <span
            class="nearby-content-tag"
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            >{{ innerItem }}</span
          >
        </div>
        <p class="nearby-content-highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {} from 'vue'
export default {
  name: 'Nearby',
  setup() {
    const nearbyList = [
      {
        id: '111',
        title: '沃尔玛',
        imgUrl: '@/assets/near/near.png',
        tags: ['月售1万', '起送￥0', '基础运费￥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: '112',
        title: '沃尔玛',
        imgUrl: '@/assets/near/near.png',
        tags: ['月售1万', '起送￥0', '基础运费￥5'],
        desc: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]

    return {
      nearbyList
    }
  }
}
</script>

<style lang="scss">
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
