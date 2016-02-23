import React from 'react'
import { Row, Col } from 'antd'
import SiderMenu from './SiderMenu'

import './layout.style.css'

export default class App extends React.Component{
	render(){
		return (
			<div>
				<div className={'sider-bar'}>
					<SiderMenu />
				</div>
				<div className={'content'}>
					<p>main content</p>
				</div>
			</div>
		);
	}
}