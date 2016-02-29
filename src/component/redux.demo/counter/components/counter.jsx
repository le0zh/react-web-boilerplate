import React, { PropTypes } from 'react'

import store from '../store'

export default class Counter extends React.Component{
	constructor(props){
		super(props);

		this.incrementIfOdd = this.incrementIfOdd.bind(this);
		this.incrementAsync = this.incrementAsync.bind(this);
	}

	incrementIfOdd(){
		if(store.getState() % 2 !== 0){
			this.props.onIncrement();
		}
	}

	incrementAsync(){
		console.log('incrementAsync');
		setTimeout(this.props.onIncrement, 1000);
	}

	render(){
		const {value, onIncrement, onDecrement} = this.props;

		return (
			<p>
				Clicked: {store.getState()} times
				{' '}
				<button onClick={onIncrement}>{' + '}</button>
				{' '}
				<button onClick={onDecrement}>{' - '}</button>
				{' '}
				<button onClick={this.incrementIfOdd}>Increment if odd</button>
				{' '}
				<button onClick={this.incrementAsync}>Increment async</button>
			</p>
		);
	}
}

Counter.propTypes = {
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

export default Counter