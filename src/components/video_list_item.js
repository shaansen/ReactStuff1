import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const VideoListItem = ({video,selectedVideo}) => {

const indiVideo = video.snippet.thumbnails.default.url;
const vidDescription = video.snippet.title;

return (
	
		<li onClick={() => selectedVideo(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="cols-md-4" src={indiVideo} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						{vidDescription}
					</div>
				</div>
			</div>
		</li>	
	
	);
}

export default VideoListItem;