import React from 'react'
import './index.less'

/**
 * 详情页面
 */
export default class Detail extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
       <div>
         <div style={{ marginTop: '20', marginBottom: '20' }} >
           <a href="javascript:;">我是Detail页面！！我的页面参数为: { this.props.params.paramsId }</a>
         </div>
       </div>
    )
  }
}
