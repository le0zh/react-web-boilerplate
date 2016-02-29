import React from 'react'
import { Provider } from 'react-redux';
import store from './store'
import App from './app'

export default class Container extends React.Component{
	constructor(){
		super();
	}

	render(){
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}