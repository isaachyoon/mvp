import React from 'react';
var $ = require('jQuery')


var Nav = (props) => {
	return (
		<div>
			<select className = 'waves-effect waves-light btn-large'>
	 			<option> Express </option>
	 			<option> Mongo </option>
	 			<option> React </option>
	 		</select>


	 			<input type='text' placeholder='Search'/>
	 			<button className = "waves-effect waves-light btn-large" type="text" onClick={(e)=>{
	 				return props.search($('input').val())}}>submit</button>


	 	</div>
	)
	//ref={(input)=> this.todo = input}
	//check form
}

export default Nav;