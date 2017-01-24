import React from 'react';
import {render} from 'react-dom';
import Title from './title.jsx';
import Nav from './nav.jsx';
import queryData from './queryData.js';
import queryResults from './queryResults.jsx';
import results from './results.jsx';


// var $ = require('jQuery');
// var request = require('request');

class App extends React.Component {

	constructor(props){
		super(props);
		// this.state = {
		// 	searched: null;
		// }
		this.search = this.search.bind(this);
		//this.componentDidMount = this.componentDidMount.bind(this);
	}

	search(event) {
		console.log('printing out searched event', event);
		queryData({query: event});
		// this.setState({searched: event})
	}


	//componentDidMount -> called after the component hasbeen rendered into the page
	// componentDidMount() {

	// //could I use request instead AJAX here?
	// 	queryData({query: 'static'})

	// }

  render () {
    return (
      <div>
        <Title />
        <Nav search = {this.search}/>
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));
