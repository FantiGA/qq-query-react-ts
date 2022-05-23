/*
 * @Author: fantiga
 * @Date: 2022-05-23 16:42:43
 * @LastEditTime: 2022-05-23 17:49:31
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/utils/interface.tsx
 */


export type TAxiosOption = {
    url: string,
    method: string,
    timeout?: 5000,
    data?: {},
    headers?: {},
}

export type TInputQQ = {
    inputQq: string
}

export interface IInput {
    param: TInputQQ,
    setParam: Function,
}

export type IResult = {
    name?: string,
    qlogo?: string,
    qq?: string,
    code?: number,
    message?: string,
    success?: boolean,
    statusCode?: number,
    lvzuan?: object,
}

export interface IQQInfo {
    info: IResult
}