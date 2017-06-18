import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';

const VideoList = ({video,selectVideo}) => {

	const videoItems = video.map((video) => { return <VideoListItem selectedVideo={selectVideo} key={video.etag} video={video} />});

return (
	<div>
		<ul className="list-group col-md-8">
			{videoItems}
		</ul>
	</div>
);
}

export default VideoList;