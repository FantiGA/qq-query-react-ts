/*
 * @Author: fantiga
 * @Date: 2022-05-23 16:30:01
 * @LastEditTime: 2022-05-26 15:55:14
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/components/Result/index.tsx
 */

import React from 'react'
import { IQQInfo } from '../../utils/interface'

import './index.scss'


const Result = (props: IQQInfo) => {
    const { info } = props
    const { name = '', qlogo = '', qq = '' } = info

    return (
        <div className='resultBox'>
            <img src={qlogo} />
            <dl>
                <dt>{name}</dt>
                <dd>{qq}</dd>
            </dl>
        </div>
    )
}
export default Result