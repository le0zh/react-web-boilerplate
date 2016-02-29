export default function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREAMENT':
			state++;
			console.log('INCREAMENT', state);
			return state;
		case 'DECREMENT':
			state--;
			console.log('DECREMENT', state);
			return state;
		default:
			return state;
	}
}