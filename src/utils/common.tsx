/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:57:05
 * @LastEditTime: 2022-05-23 16:12:53
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/utils/common.tsx
 */

/**
 * 模拟异步延迟
 */
export const delay = (time = 1000) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

/**
 * 防抖函数方法
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间
 */
export const debonce = (fn: Function, wait: number) => {
    let timer: number | null = null
    return function (this: any) {
        let context = this, args = arguments
        if (timer) {
            clearTimeout(timer)
            timer = null
        } else {
            timer = window.setTimeout(() => {
                fn.apply(context, args)
            }, wait)
        }
    }
}
