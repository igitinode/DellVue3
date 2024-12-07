import { h, render } from 'vue'
import confirmComponent from './index.vue'

/**
 * 展示 confirm，用户只传递一个参数，那么这个参数为 content
 * @param {*} title 标题（如果用户没有传递内容，那么标题被作为内容）
 * @param {*} content 文本（如果没有title,那么content会被作为第一个参数传入）
 * @param {*} cancelText 取消按钮文本
 * @param {*} confirmText 确定按钮文本
 * @returns
 */
export const confirm = (
  title,
  content,
  cancelText = '取消',
  confirmText = '确定'
) => {
  return new Promise((resolve, reject) => {
    // 允许只传递 content
    // 用户值传递一个参数，把这个参数当做content来处理。不显示 title
    if (title && !content) {
      content = title
      title = ''
    }

    // 关闭弹层事件，把渲染的vnode去掉
    const close = () => {
      render(null, document.body)
    }

    // 取消按钮事件
    const cancelHandler = () => {
      reject(new Error('取消按钮点击'))
    }

    // 确定按钮事件
    const confirmHandler = () => {
      resolve()
    }

    // 1. 生成 vnode：虚拟 dom 节点
    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      confirmHandler,
      cancelHandler,
      close
    })
    // 2. render 渲染：将虚拟 dom 渲染成真实 dom
    render(vnode, document.body)
  })
}
