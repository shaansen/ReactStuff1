import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';

const API_Key = "AIzaSyBqCVmYmRdD0IgOufeJjXuMBR0S6y-FBn0";

class App extends Component {

	constructor(props)
	{
		super(props);
		this.state = ({
			videos: [],
			selectedVideo: null
			
		});

		this.videoSearch("surfboards");
	}

	videoSearch(term)
	{
		YTSearch({key: API_Key, term: term},(videos) => {
			this.setState({videos: videos, selectedVideo: videos[0]});
			
		});
	}

	render(){
		return (
			<div>
			<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
			<VideoDetails video={this.state.selectedVideo} />
			<VideoList selectVideo={(selectedVideo) => this.setState({selectedVideo})} video={this.state.videos} />
			</div>
			);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));