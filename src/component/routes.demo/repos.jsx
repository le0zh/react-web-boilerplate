import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
	render() {
		return (
			<div style={{padding:50}}>
				<h2>Repos</h2>
				<ul>
					<li><NavLink to="/repos/rackt/react-router">react-router</NavLink></li>
					<li><NavLink to="/repos/facebook/react">react</NavLink></li>
				</ul>

				{/* will render `Repo.js` when at /repos/:userName/:repoName */}
  				{this.props.children}
			</div>
		);
	}
})