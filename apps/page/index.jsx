import React from 'react'
import {Router, Route, IndexRedirect, IndexRoute, hashHistory} from 'react-router'
import Entry from '../entry'
import Home from './home'
import List from './list'
import Detail from './detail'

import './index.less'

/**
 * 主页
 */
var routes = [
  { path : '/', component: Home, name: '主页'},
  { path : '/list', component: List, name: '列表页面'},
  { path : '/detail/:paramsId', component: Detail, name: '详情页面'},
]

class App extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
     <div>
        <Router history={hashHistory}>
          {
            routes.map((route, key) => {
              return(
                <Route key={ key } path={route.path} component={route.component}/>
              )
            })
          }
        </Router>
     </div>
    )
  }
}
  
Entry(App, ()=>{})
