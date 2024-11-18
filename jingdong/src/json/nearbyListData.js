// 附近商家列表

export const nearByListData = () => {
  return {
    errno: 0,
    data: [
      {
        _id: '111',
        name: '沃尔玛',
        imgUrl: '@/assets/near/near.png',
        sales: 100,
        expressLimit: 0,
        expressPrice: 5,
        tags: ['月售1万', '起送￥0', '基础运费￥5'],
        slogan: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        _id: '112',
        name: '沃尔玛',
        imgUrl: '@/assets/near/near.png',
        sales: 500,
        tags: ['月售1万', '起送￥0', '基础运费￥5'],
        slogan: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ],
    message: 'error !===0 的错误信息'
  }
}
