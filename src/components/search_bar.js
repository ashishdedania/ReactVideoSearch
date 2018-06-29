import React,{Component} from 'react';


class SearchBar extends React.Component{
	
	constructor(props) {
		super(props);
		this.state = { term : '' };
	}

	render() {
		return (
			<div className='search-bar'>
			<input 
				onChange = {event => this.onChangeInput(event.target.value)} 
				value    = {this.state.term}
			/>
			</div>
		);
	}

	onChangeInput(term)
	{
		this.setState({term : term});
		this.props.onSearchTermChange(term);

	}
}

export default SearchBar;