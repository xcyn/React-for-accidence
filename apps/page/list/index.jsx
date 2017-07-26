import React from 'react'
import { Link, hashHistory } from 'react-router'
import './index.less'
import { connectFactory } from 'redux-common'
import * as commonAction from '../state/actions/common.js'
/**
 * 引入redux
 */
@connectFactory(
  state => {
    console.log('state.common',state.common)
    return {
      common: state.common
    }
  },
  { commonAction }
)

/**
 * 列表页面
 */
export default class List extends React.Component {
  constructor () {
    super()
  }

  goDetai(params){
    hashHistory.push('/detail/' + params)
  }

  render () {
    const Lists = [1,2,3,4]
    return (
       <div>
         <div>
           我是List页面！
           <div>
             redux数据: <span style={{ color: 'red' }}>{ this.props.common.user.name }</span>
           </div>
         </div>
         <div>
           {
             Lists.map((list,key) =>{
               return(
                  <div style={{ marginTop: '20px', marginBottom: '20px' }} key={key} onClick={this.goDetai.bind(this,list)}>
                    <a href="javascript:;">点击跳转到{list}页面</a>
                  </div>
               )
             })
           }
         </div>
       </div>
    )
  }
}
