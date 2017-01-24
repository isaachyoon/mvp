import React from 'react';
var $ = require('jQuery')


var Nav = (props) => {
	return (
		<div>
			<select value = {optionsState} className = 'waves-effect waves-light btn-large'>
	 			<option value = 'A'> Express </option>
	 			<option value = 'B'> Mongo </option>
	 			<option value = 'C'> React </option>
	 		</select>

	 			<input type='text' value = {inputText} placeholder='Search'/>
	 			<button className = "waves-effect waves-light btn-large" type="text" onClick={()=>{
	 				return props.search({optionsState, inputText})}}>submit</button>


	 	</div>
	)
	//ref={(input)=> this.todo = input}
	//check form
}

export default Nav;