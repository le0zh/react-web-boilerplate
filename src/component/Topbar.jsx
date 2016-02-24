import React, {Component ,PropTypes} from 'react'
import { Icon } from 'antd';

export default class Topbar extends Component{
	render(){
		return(
			<div className={'viewFramework-topbar'}>
				<div className={'topbar-head topbar-left'}>
					<a href="#" className={'topbar-logo topbar-left'}>天</a>
				</div>

				<div className={'topbar-nav topbar-left'}>
					<a href="#" className={'topbar-home-link topbar-btn topbar-left border-right'}>管理控制台</a>
				</div>

				<div className={'topbar-info topbar-right topbar-clearfix'}>
					<div className={'topbar-btn topbar-left border-left'}>
						<Icon type="search" /> 搜索
					</div>
					<div className={'topbar-btn  topbar-left border-left'}>
						<Icon type="mobile" /> 手机版
					</div>
					<div className={'topbar-btn  topbar-left border-left'}>
						<Icon type="question-circle-o" /> 帮助与文档
					</div>
					<div className={'topbar-btn  topbar-left border-left'}>
						newlight@qq.com
					</div>
				</div>
			</div>
		);
	}
}