import React from 'react'
import { Link } from 'react-router'
import './index.less'
import { connectFactory } from 'redux-common'
import * as commonAction from '../state/actions/common.js'
/**
 * 引入redux
 */
@connectFactory(
  state => {
    console.log('state.commonAction',commonAction)
    return {
      common: state.common
    }
  },
  { commonAction }
)

/**
 * home页面
 */
export default class Home extends React.Component {
  constructor () {
    super()
  }

  _changeRedux(){
    if(this.props.common.user.name == '小熊') {
      this.props.commonAction.setUserInfo({
        'name':'我最帅'
      })
    } else {
      this.props.commonAction.setUserInfo({
        'name':'小熊'
      })
    }

  }

  render () {
    return (
       <div>
         <div style={{ marginTop: '20px', marginBottom: '20px' }} >
           我是home页面！！
           <div  style={{ marginTop: '20px', marginBottom: '20px' }} >
             redux数据: <span style={{ color: 'red' }}>{ this.props.common.user.name }</span>
           </div>
           <div>
             <span style={{ color: '#000', backgroundColor:'green' }} onClick={ this._changeRedux.bind(this) }>改变redux数据: 点击后为我最帅</span>
           </div>
         </div>
         <Link to="/list">点击跳转到列表页面</Link>
       </div>
    )
  }
}
