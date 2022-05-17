/*
 * @Author: fantiga
 * @Date: 2022-05-17 15:35:26
 * @LastEditTime: 2022-05-17 18:12:09
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/App.tsx
 */

import React, { useState, useEffect } from 'react'
import "./App.scss";

import './components/Query/index.scss'
import './components/Error/index.scss'
import './components/Result/index.scss'
// import Query from './components/Query'
// import Error from './components/Error'
// import Result from './components/Result'

import axios from 'axios'

export default function App() {
    const [data, setData] = useState({ qq: '', requestQq: '', name: '', qlogo: '' })

    const queryHandler = async (qq: string) => {
        const apiUrl = 'https://api.uomg.com/api/qq.info'
        const result = await axios.get(apiUrl, {
            params: {
                qq: qq
            }
        })

        const { qq: requestQq, name, qlogo } = result.data
        setData({ qq, requestQq, name, qlogo })
    }

    const inputHandler = (params: { qq: string }): void => {
        const { qq } = params
        queryHandler(qq)
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
                            qq: event.target.value
                        })}
                    /></label>
                </form>
                <div className='loading'>Loading...</div>
                <div className='errorMsg'>Error</div>
                <div className='resultBox'>
                    <img src={data.qlogo} />
                    <dl>
                        <dt>{data.name}</dt>
                        <dd>{data.requestQq}</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}