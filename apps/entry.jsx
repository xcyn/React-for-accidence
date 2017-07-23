import React, {PropTypes} from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { storeFactory } from './util/redux-common'

//入口扩展配置，便于后期多项目扩展 （可以通过webpack entry做可配置性）
export default (App, RootReducer, Routes) => {
    const store = storeFactory(RootReducer)
    class Entry extends React.Component {
        constructor(props) {
            super(props)
        }

        // 页面顶部
        getHeader() {
            return (
                <div style={{ marginTop: '20', marginBottom: '20' }} >
                    我是顶部(后期扩展导航)
                </div>
            )
        }

        // 页面底部
        getFooter() {
            return (
                <div style={{ marginTop: '20', marginBottom: '20' }} >
                    我的footer部分！！
                </div>
            )
        }

        render() {
            return (
                <div>
                    <div>
                        {this.getHeader()}
                        <Provider store={store}>
                            <App></App>
                        </Provider>
                        {this.getFooter()}
                    </div>
                </div>
            )
        }
    }

    render(
        <Entry></Entry>,
        document.getElementById('root')
    )
}