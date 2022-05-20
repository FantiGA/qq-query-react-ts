/*
 * @Author: fantiga
 * @Date: 2022-05-18 16:59:38
 * @LastEditTime: 2022-05-20 11:45:10
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/utils/request.tsx
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

interface resData {
    qq: string,
    name: string,
    qlogo: string,
}

const url = 'https://api.uomg.com/api/qq.info'

// const loadingEl: HTMLElement = document.getElementById('loading')!
// console.log(loadingEl)

// function createAxiosResponseInterceptor(axiosInstance: AxiosInstance) {
// }

// create an axios instance   创建axios实例
const instance = axios.create({
    url,
    // baseURL: 'https://api.uomg.com/api/', // api 的 base_url
    timeout: 5000, // request timeout  设置请求超时时间
    responseType: 'json',
    responseEncoding: 'utf8', // 默认值
    // transformRequest: [function (data, headers) {
    //     // 对发送的 data 进行任意转换处理

    //     return data;
    // }],
    // headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    // },
    withCredentials: false, // 表示跨域请求时是否需要使用凭证
})

export default async function qqQuery(inputQq: string) {
    let data: resData
    await instance.get(url,
        {
            params: {
                qq: inputQq
            }
        })
        .then(function (response) {
            // 处理成功情况

            data = response.data
        })
        .catch(function (error) {
            // 处理错误情况
            console.log('error');
            return error
        })
        .then(function () {
            // 总是会执行
            // loadingEl.style.visibility = 'hidden'
            // console.log(loadingEl)
        })

    // // 添加请求拦截器
    // const requestInterceptor = instance.interceptors.request.use(
    //     (config: AxiosRequestConfig) => {
    //         // 在发送请求之前做些什么

    //         // loadingEl.style.visibility = 'visible'
    //         return config
    //     },
    //     (error: unknown) => {
    //         // 对请求错误做些什么

    //         console.log('error', error)
    //         return Promise.reject(error)
    //     }
    // )

    // // 移除拦截器
    // instance.interceptors.request.eject(requestInterceptor)


    // // 添加响应拦截器
    // const responseInterceptor = axiosInstance.interceptors.response.use(
    //     response => {
    //         // 2xx 范围内的状态码都会触发该函数。
    //         // 对响应数据做点什么

    //         return response
    //     },
    //     error => {
    //         // 超出 2xx 范围的状态码都会触发该函数。
    //         // 对响应错误做点什么

    //         return Promise.reject(error)
    //     }
    // )
    // // 移除拦截器
    // axiosInstance.interceptors.response.eject(responseInterceptor)

    return data!
}
