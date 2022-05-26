/*
 * @Author: fantiga
 * @Date: 2022-05-23 16:42:43
 * @LastEditTime: 2022-05-26 15:58:35
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/utils/interface.tsx
 */

type TAxiosOption = {
    url: string,
    method: string,
    timeout?: 5000,
    data?: {},
    headers?: {},
}

type TInputQQ = {
    inputQq: string
}

interface IInput {
    param: TInputQQ,
    setParam: Function,
}

type IResult = {
    name?: string,
    qlogo?: string,
    qq?: string,
    code?: number,
    message?: string,
    success?: boolean,
    statusCode?: number,
    lvzuan?: object,
}

interface IQQInfo {
    info: IResult
}

export { TAxiosOption, TInputQQ, IInput, IResult, IQQInfo }