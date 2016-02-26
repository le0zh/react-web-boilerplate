import React from 'react'

export default class Repo extends React.Component{
	render(){
		return (
			<div style={{padding:50}}>
				<h2>{this.props.params.repoName}'s home page</h2>
				<p>@{this.props.params.userName}</p>
			</div>
		);
	}
}