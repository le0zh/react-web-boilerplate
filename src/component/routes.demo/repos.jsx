import React from 'react'

export default React.createClass({
	render() {
		return <div>Repos, name parmas: {this.props.params.repoName}</div>
	}
})