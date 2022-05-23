/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:56:30
 * @LastEditTime: 2022-05-23 17:52:24
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/utils/request.tsx
 */

import axios from 'axios'
import { TAxiosOption } from './interface'

const SUCCESS_CODE = 1

const WITH_BODY_REQUESTS = ['put', 'get', 'post', 'patch']

/**
 * 封装Axios
 * @param options 
 * @returns 
 */
const fetch = (options: TAxiosOption) => {
    let {
        url, method = 'get',
        headers = { 'Content-Type': 'application/jsonutf-8', 'X-Requested-With': 'XMLHttpRequest' },
        ...restOptions
    } = options

    if (typeof options === 'string') {
        url = options
        method = 'get'
    }
    method = method.toLowerCase()

    if (WITH_BODY_REQUESTS.includes(method)) {
        return axios({
            url, method, headers,
            ...restOptions
        })
    } else {
        return axios({
            url, method, headers,
            ...restOptions
        })
    }
}

/**
 * 封装axios请求后的Promise链
 * @param options 
 * @returns 
 */
export default async function request(options: TAxiosOption) {
    return fetch(options)
        .then((response) => {
            const { status: statusCode, statusText, data: resData } = response
            const { code, msg } = resData
            let meta = {
                success: SUCCESS_CODE === code,
                message: msg || statusText,
                statusCode,
                code,
            }

            return { ...meta, ...resData }
        })
        .catch((error) => {
            const { response } = error
            let message
            let statusCode
            if (response && response instanceof Object) {
                const { status, statusText, data } = response
                const { msg } = data
                statusCode = status
                message = msg || statusText
            }
            return { success: false, message, statusCode }
        })
}