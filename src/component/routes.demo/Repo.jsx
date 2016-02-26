import React from 'react'

export default class Repo extends React.Component{
	render(){
		const {repoName, userName} = this.props.params;
		const desc = `// ${repoName} is made by ${userName}`;
		return (
			<div style={{padding:50}}>
				<h2>{repoName}'s home page</h2>
				<p>@{userName}</p>
				<p>{desc}</p>
			</div>
		);
	}
}