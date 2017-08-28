import React from 'react'
import { Link } from 'react-router'
import './index.less'
import { connectFactory } from 'redux-common'
import * as commonAction from '../state/actions/common.js'
/**
 * fetch数据
 */
import { getTestData, postTestDate, testMock } from '../../fetch/test.js'
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
    this.state = {
      queryData: []
    }
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

  _getFetchDate(){
    let { queryData } = this.state
    testMock().then((data) => {
      console.log('data', data)
    })
  }

  _removeFetchDate(){
    this.setState({
      queryData: []
    })
  }

  render () {
    const { queryData } = this.state
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
           <div  style={{ marginTop: '20px', marginBottom: '20px' }} >
             <span style={{ color: '#fff', backgroundColor:'blue' }} onClick={ this._getFetchDate.bind(this) }>点击fetch数据</span>
           </div>
           <div  style={{ marginTop: '20px', marginBottom: '20px' }} >
             {
               queryData.length > 0 ? <div>{ queryData.map((val, key) => {
                 return <div key={ key }> { val.description } + { key } </div>
               }) }</div> : <span>暂时没有数据</span>
             }
           </div>
           <div  style={{ marginTop: '20px', marginBottom: '20px' }} >
             <span style={{ color: '#fff', backgroundColor:'blue' }} onClick={ this._removeFetchDate.bind(this) }>清空fetch数据</span>
           </div>
         </div>
         <Link to="/list">点击跳转到列表页面</Link>
       </div>
    )
  }
}
