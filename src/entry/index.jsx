import React from 'react'
import ReactDom from 'react-dom'

//布局演示
//import App from '../component/layout.demo/app'

//路由演示
//import App from '../component/routes.demo/router.index'

//reduser实例，计数器
import App from '../component/redux.demo/counter/index'

ReactDom.render(<App />, document.getElementById('react-content'));