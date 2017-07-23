import React from 'react'
import { Link } from 'react-router'
import './index.less'

/**
 * home页面
 */
export default class Home extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
       <div>
         <div style={{ marginTop: '20', marginBottom: '20' }} >
           我是home页面！！
         </div>
         <Link to="/list">点击跳转到列表页面</Link>
       </div>
    )
  }
}
