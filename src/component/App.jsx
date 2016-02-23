import React from 'react'
import {DatePicker, Button } from 'antd'

// ES6 style
class App extends React.Component{
	constructor(){
		super();
		this.state = {date: '2016-2-23'}
	}

	btnClickHandle(){
		alert(this.state.date);
	}

	dateChange(val){
		this.setState({
			date: val
		});
	}

	render() {
		return (
			<div style={{width:400, margin:'100px auto'}}>
				<h3>hello world</h3>
				<DatePicker onChange={(dateVal)=>this.dateChange(dateVal)}/>
				
				<div style={{marginTop:10}}>
					<Button type="primary" onClick={()=>this.btnClickHandle()}>主按钮1</Button>
				</div>
			</div>
		);
	}
}

export default App