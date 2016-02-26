import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './app'
import Home from './Home'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'

export default class RouterTest extends React.Component{
	render(){ 
		return(
			<Router history={browserHistory}>
				<Route path="/" component={App}>
				    {/* add it here, as a child of `/` */}
      				<IndexRoute component={Home}/>

					<Route path="/repos" component={Repos}>
					 	{/* 嵌套路由 */}
						<Route path="/repos/:userName/:repoName" component={Repo}/>
					</Route>
	    			<Route path="/about" component={About}/>
				</Route>
			</Router>
		);
	}
}