/*
 * @Author: fantiga
 * @Date: 2022-05-16 17:13:25
 * @LastEditTime: 2022-05-16 17:28:57
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-qq-query-ts/src/index.tsx
 */
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';

/**
 * React 18 新写法
 */
const container: HTMLElement = document.getElementById('root')!;
// 创建一个root。
const root = createRoot(container)
// 初始渲染：将一个元素渲染到root。
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)