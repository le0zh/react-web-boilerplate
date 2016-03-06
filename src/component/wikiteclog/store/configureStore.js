import {
	createStore, applyMiddleware
}
from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore(initalState) {
	const store = createStore(
		rootReducer,
		initalState,
		applyMiddleware(thunkMiddleware)
	);

	return store;
}