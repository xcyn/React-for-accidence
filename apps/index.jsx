import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

class Hello extends React.Component {
    render() {
        return (
            <p>小熊app启动啦！！</p>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)
