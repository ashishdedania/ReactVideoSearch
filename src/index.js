import _ from 'lodash';
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

		this.state = {
			videos : [],
			selectedVideo : null
		};

		this.videoSearch('technology');
	}

	videoSearch(term){
		YTSearch({key:API_KEY,term:term},(videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
			});
		});
	}

	

	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term) } ,300);

		return( 
			<div>
				<SearchBar onSearchTermChange = { videoSearch }/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos        = {this.state.videos}
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				/>	
			</div>
		);
	}	
}



// Take this component generated HTML and render on page
ReactDom.render(<App/>,document.querySelector('.container'));