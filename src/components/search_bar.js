import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
	
	constructor(props) {
		super(props);
		this.state = ({term: "Shantanu"});
	}

	handleTextChange(term) {
		this.setState({term : term});
		this.props.onSearchTermChange(term);
	}



	render(){
		return (
			<div>
			<input value={this.state.term} onChange={event => this.handleTextChange(event.target.value)}/>
			</div>
			);
	}
}

export default SearchBar;