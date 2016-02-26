//路由测试

import React from 'react'

import NavLink from './NavLink'

export default class App extends React.Component{
	render(){
		return (
			<div style={{padding: 100}}>
				<h1>React router tutorial</h1>
				<ul>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/repos">Repos</NavLink></li>
				</ul>

				{this.props.children}
			</div>
		);
	}
}