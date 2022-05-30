/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:53:11
 * @LastEditTime: 2022-05-30 15:36:54
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/components/Query/index.tsx
 */

import React from 'react'
import { debounce } from '../../utils/common'
import { IInput } from '../../utils/interface'

import './index.scss'

const Query = (props: IInput) => {
    const { param, setParam } = props

    return <form action=''>
        <h1>QQ号查询</h1>
        <label>QQ<input
            className='input-qq'
            type='number'
            min='10000'
            placeholder='输入QQ号码'
            value={param.inputQq}
            onChange={event => debounce(setParam({
                ...param,
                inputQq: event.target.value
            }), 5000)}
        /></label>
    </form>
}

export default Query