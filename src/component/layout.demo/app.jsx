import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router'

import './layout.style.css'
import SiderMenu from './SiderMenu'
import Topbar from './Topbar'
import ContentDemo from './TableData'

export default class App extends React.Component{
	render(){
		return (
			<div>
				<Topbar />
				<div className={'viewFramework-body'}>
					<SiderMenu styleName={'viewFramework-sidebar'} />
					<div className={'viewFramework-product'}>
						<div className={'viewFramework-product-body'}>
							<div className={'console-container'}>
								<h1 style={{marginTop: 10, marginBottom: 10}}>测试内容</h1>
								<ContentDemo />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}