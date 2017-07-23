import React from 'react'
import { Link, hashHistory } from 'react-router'
import './index.less'

/**
 * 列表页面
 */
const Lists = [1,2,3,4]
export default class List extends React.Component {
  constructor () {
    super()
  }

  goDetai(params){
    hashHistory.push('/detail/' + params)
  }

  render () {
    return (
       <div>
         <div>
           我是List页面！
         </div>
         <div>
           {
             Lists.map((list,key) =>{
               return(
                  <div style={{ marginTop: '20', marginBottom: '20' }} key={key} onClick={this.goDetai.bind(this,list)}>
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
