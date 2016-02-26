import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './layout'

import About from './pages/About'
import Repos from './pages/Repos'

export default class RouterTest extends React.Component{
	render(){ 
		return(
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<Route path="/repos/:repoName" component={Repos}/>
	    			<Route path="/about" component={About}/>
				</Route>
			</Router>
		);
	}
}