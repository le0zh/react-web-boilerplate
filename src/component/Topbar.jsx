import React, {Component ,PropTypes} from 'react'
import { Icon } from 'antd';

export default class Topbar extends Component{
	toggleDropdown(e){
		//here event is native browser event
		console.log('toggleDropdown', e);

		//如果提供了事件对象，则这是一个非IE浏览器 
		if ( e && e.stopPropagation ) 
			//因此它支持W3C的stopPropagation()方法 
			e.stopPropagation(); 
		else{
			//否则，我们需要使用IE的方式来取消事件冒泡 
			window.event.cancelBubble = true; 
		}
		
		var containerDom = this.refs.dropdownContainer;
		if(containerDom){
			if(containerDom.className.indexOf('open') >= 0){
				//关闭
				containerDom.className = containerDom.className.replace('open', '').trim();
			}
			else{
				//打开
				containerDom.className += " open";
			}
		}
	}

	hideDropdown(e){
		var containerDom = this.refs.dropdownContainer;
		console.log('hideDropdown');

		if(containerDom){
			if(containerDom.className.indexOf('open') >= 0){
				//关闭
				containerDom.className = containerDom.className.replace('open', '').trim();
			}
		}
	}

	componentDidMount(){
		console.log('componentDidMount');
		var body = document;
		console.log(body);
		body.addEventListener('click', (e)=>this.hideDropdown(e));

		var containerDom = this.refs.dropdownContainer;
		//手动绑定点击事件, 否则没办法阻止事件冒泡
		//参考: 
		//https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46#.fv2h9z238
		//https://github.com/erikras/react-native-listener
		containerDom.addEventListener('click', (e)=>this.toggleDropdown(e));
	}

	render(){
		return(
			<div className={'viewFramework-topbar'}>
				<div className={'topbar-head topbar-left'}>
					<a href="#" className={'topbar-logo topbar-left'}><Icon type="book" /></a>
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
					<div ref="dropdownContainer" className={'dropdown topbar-left border-left'}>
						<a href="#" className={'topbar-btn'}>
							<span>admin@wikitec.com</span>
							<Icon type="down" style={{marginLeft: 5}} />
						</a>

						<ul className={'dropdown-menu'}>
							<li className={'topbar-info-btn'}> 
								<a href="#">修改密码</a>
							</li>
							<li className={'topbar-info-btn'}> 
								<a href="#">退出</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}