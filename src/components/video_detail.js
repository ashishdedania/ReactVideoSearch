import React from 'react';

const VideoDetail = ({video}) => {

	if(!video)
	{
		return(<div>Loadning .... </div>)
	}


	const videoId = video.id.videoId;
	const url     = `http://youtube.com/embed/${videoId}`

	return (
		<div className='video-details col-md-8'>
			<div className='embed-responsive-16by9'>
				<iframe className='embed-responsive-item' src={url}></iframe>
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;
