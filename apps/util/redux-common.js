import thunkMiddleware from 'redux-thunk'
import { applyMiddleware, createStore, compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * store生成器
 * 
 * @param {[object]} rootReducer 需要绑定的reducer对象
 */
export function storeFactory(rootReducer) {
  const initState = {}
  const finalCreateStore = compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)

  return finalCreateStore(rootReducer, initState)
}

/**
 * connect生成器
 * 
 * @param  {[string]} 	   state 	 [需要绑定的状态]
 * @param  {[func or obj]} actions   [需要绑定actions]
 * @return {[func]}        [redux connect实例]
 */
export function connectFactory(state, actions){
  return (target) => {
    return connect(
      state,
      dispatch => {
        const _actionsCreators = {}

        Object.keys(actions).forEach(item => {
          _actionsCreators[item] = bindActionCreators(actions[item], dispatch)
        })

        return _actionsCreators
      }
    )(target)
  }
}