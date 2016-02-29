import React from 'react'
import Counter from './components/Counter'
import { connect } from 'react-redux';
import store from './store'

class App extends React.Component{
	constructor(){
		super();
	}

	onIncrement(){
		store.dispatch({type: 'INCREAMENT'});
		console.log(store.getState());
	}

	onDecrement(){
		store.dispatch({type: 'DECREMENT'});
		console.log(store.getState());
	}

	render(){
		return (
			<Counter
				onIncrement={()=>this.onIncrement()}
				onDecrement = {()=>this.onDecrement()} />
		);
	}
}

function select(state) {
	return {
		state: state
	};
}

export default connect(select)(App);