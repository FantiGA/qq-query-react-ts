/*
 * @Author: fantiga
 * @Date: 2022-05-17 15:35:26
 * @LastEditTime: 2022-05-20 11:45:44
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/App.tsx
 */

import React, { useState } from 'react'
import "./App.scss"

import qqQuery from './utils/request'

export default function App() {
    const [data, setData] = useState({ qq: '', name: '', qlogo: '' })

    const inputHandler = (params: { inputQq: string }): void => {
        const { inputQq } = params
        queryHandler(inputQq)
    }

    const queryHandler = async (inputQq: string) => {
        qqQuery(inputQq).then(data => {
            const { qq, name, qlogo } = data
            setData({ qq, name, qlogo })
        });
    }

    return (
        <div className='container'>
            <div className='wrapper'>
                <form action=''>
                    <h1>QQ号查询</h1>
                    <label>QQ<input
                        className='input-qq'
                        type='number'
                        min='10000'
                        placeholder='输入QQ号码'
                        onChange={event => inputHandler({
                            inputQq: event.target.value
                        })}
                    /></label>
                </form>
                <div>
                    <div className='loading' id='loading'>Loading...</div>
                    <div className='errorMsg' id='errorMsg'>Error</div>
                    <div className='resultBox' id='resultBox'>
                        <img src={data.qlogo} />
                        <dl>
                            <dt>{data.name}</dt>
                            <dd>{data.qq}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}