import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/playpause.js';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import FormattedTime from '../../libs/utilities.js';
import ProgressBar from '../components/progress-bar.js';

class VideoPlayer extends Component{
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		durationFloat: 0,
		timeFloat: 0,
	}
	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause,
		})
	}
	componentDidMount(){
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: FormattedTime(this.video.duration),
			durationFloat: this.video.duration,
		});

	}
	handleTimeUpdate = event => {
		this.setState({
			currentTime: FormattedTime(this.video.currentTime),
			timeFloat: this.video.currentTime,
		})
	}
	handleProgressChange = event => {
		// event.target.value
		this.video.currentTime = event.target.value
	}
	render(){
		return(
			<VideoPlayerLayout>
				<Title title="Video chido"/>
				<Controls>
					<PlayPause 
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<ProgressBar
						duration={this.state.durationFloat}
						value={this.state.timeFloat}
						handleProgressChange={this.handleProgressChange}
					/>
					<Timer 
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
				</Controls>
				<Video 
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;