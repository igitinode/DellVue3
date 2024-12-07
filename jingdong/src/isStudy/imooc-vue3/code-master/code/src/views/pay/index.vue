<template>
  <div class="h-full bg-zinc-200 dark:bg-zinc-800 duration-400 xl:pt-1">
    <div
      class="mx-auto h-full pt-[50%] px-1 bg-white dark:bg-zinc-900 duration-400 xl:h-[360px] xl:rounded-sm xl:py-10 xl:border-zinc-200 xl:dark:border-zinc-600 xl:border-[1px] xl:px-4 xl:max-w-screen-lg"
    >
      <div
        v-if="JSON.stringify(isSuccess) !== 'null'"
        class="flex justify-center items-center"
      >
        <m-svg-icon
          v-if="isSuccess"
          name="pay-success"
          class="w-8 h-8 mr-4"
        ></m-svg-icon>
        <m-svg-icon
          v-if="!isSuccess"
          name="pay-fail"
          class="w-8 h-8 mr-4"
        ></m-svg-icon>
        <p class="text-ml text-zinc-900 dark:text-zinc-200">
          {{ isSuccess ? '支付成功' : '支付失败' }}
        </p>
      </div>

      <m-button
        class="w-full mt-8 mx-auto dark:bg-zinc-800 xl:w-[120px]"
        @click="onConfirm"
        >确定</m-button
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getPayResult } from '@/api/pay'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()

// 当前的支付是否是成功的
// 根据订单号 查询获取支付结果接口返回
const isSuccess = ref(null)

//支付成功界面的URL或有 payOrderId

// 支付成功后会3跳转到商户页面
//https://imooc-front.lgdsunday.club/pay/result/?charset=utf-8&out_trade_no=0e4ff9a5-32bb-4235-8d61-a85d5fc4c711&method=alipay,trade.page.pay.return&total amount=0.01&sign=E%2BU%2Fa75uwK8G60U4iPbFSIHmk5hXxD5ACCkagpag0%2FJha号2FcFtcwHrMJfh2h58Z8KEea09tsn18z0XCMTWLVYhr30TpUifioH56PRgHi%2Egudu1qzFe5D12iUcMDh6a0YzgPiBkEWbXcBJgFJDUPmdzmlkvfy%2BK0BWo4ASic38VWxa5rFfSVzYv29%2FiRH54bhF0Bv8nIFpoBYTx8d0Ss6Iwp0lwsLb8TSWrZDSv0ITn3zxUu8nU0HFGZNCXclkJA%2B%2FJfo6dm2843A0%3D%3D&E4UX6BxZVukf7grepxXVWHStrade_no=2022041922001458151440190027&auth_app_id=2021003123624147&version=10&app id=2021003123624147&sign type=RSA2&seller id=2088341890170470&timestamp=2022-04-19+18%3A55%3A56

// route.query.out_trade_no 拿到订单号
// 获取支付结果
const getResultData = async () => {
  const res = await getPayResult(route.query.out_trade_no)
  isSuccess.value = res
}
getResultData()

const onConfirm = () => {
  // 重新获取用户信息，可能是 非vip 变成了 vip
  store.dispatch('user/profile')
  // 回到首页
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
