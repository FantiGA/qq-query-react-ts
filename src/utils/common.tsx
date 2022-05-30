/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:57:05
 * @LastEditTime: 2022-05-30 15:40:34
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/utils/common.tsx
 */

import { useEffect } from 'react'
import { TInputQQ } from './interface'

/**
 * 模拟异步延迟
 */
const delay = (time = 1000) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

/**
 * 防抖函数方法
 * @param {*} fn 执行函数
 * @param {*} wait 防抖时间
 */
const debounce = <P extends any[]>(fn: Function, wait: number) => {
    let timer: number | null = null
    return function (this: P) {
        let args: IArguments = arguments
        if (timer) clearTimeout(timer)
        timer = window.setTimeout(() => {
            fn.apply(this, args)
        }, wait)
    }
}

// 防抖副作用函数
const useDebouncedEffect = (fn: Function, ms: number, deps: Array<TInputQQ>) => {
    useEffect(() => {
        let clean: Function | null = null
        const timer = setTimeout(() => {
            clean = fn()
        }, ms)
        return () => {
            clearTimeout(timer)
            if (clean) clean()
        }
    }, deps)
}

export { delay, debounce, useDebouncedEffect }