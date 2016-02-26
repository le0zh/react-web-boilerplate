import React from 'react'
import { browserHistory } from 'react-router'

export default class Home extends React.Component{
	gotoPage(e){
		const path = '/about';
		browserHistory.push(path);
	}

	render(){
		return (
			<div style={{padding:40}}>
				<h3>home</h3>
				{/*这里演示如果通过程序控制路由跳转*/}
				<button onClick={(e)=>this.gotoPage(e)}>go to about page</button>
			</div>
		);
	}
}