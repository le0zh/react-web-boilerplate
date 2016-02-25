import React from 'react'
import { Row, Col } from 'antd'
import SiderMenu from './SiderMenu'
import Topbar from './Topbar'

import ContentDemo from './Test'

import './layout.style.css'

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
								<h2 style={{paddingTop: 15, paddingBottom: 15}}>测试内容</h2>
								<ContentDemo />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}