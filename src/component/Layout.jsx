import React from 'react'
import { Row, Col } from 'antd'
import SiderMenu from './SiderMenu'
import Topbar from './Topbar'

import './layout.style.css'

export default class App extends React.Component{
	render(){
		return (
			<div>
				<Topbar />
				<SiderMenu styleName={'viewFramework-sidebar'} />
				<div className={'content'}>
					<p>main content</p>
				</div>
			</div>
		);
	}
}