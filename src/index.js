import React,{Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBPwV2o6BBb_EA0Ne63C0Z4guKOtOGhVuw';



// create simple component, this component should product some HTML
class App  extends Component{
	constructor(props){
		super(props);

		this.state = {videos : []};

		YTSearch({key:API_KEY,term:'nasa'},(videos) => {
			//console.log(typeof(data));
			//console.log(data);
			/*var videost = Object.keys(videos).map(function(key) {
		    return [Number(key), videos[key]];*/
		    this.setState({videos});
		    //return data;
		});

			//console.log(videost);
			//this.setState({videos});
			//this.setState({videos : videos});
		//});

	}

	

	render(){
		return( 
			<div>
				<SearchBar/>
				<VideoDetail video = {this.state.videos[0]} />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}	
}



// Take this component generated HTML and render on page
ReactDom.render(<App/>,document.querySelector('.container'));