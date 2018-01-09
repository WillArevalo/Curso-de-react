import React, { Component } from 'react';
import Media from './media.js';
import './playlist.css';

class Playlist extends Component{
	render() {
		const {titulo, descripcion, lista} = this.props // --- playlist
		return (
			<div className = "Playlist">
				<h1 className = "Playlist-titulo">{titulo}</h1>
				<h4 className = "Playlist-descripcion">{descripcion}</h4>
				<div className = "Playlist-scroller">
					{
						lista.map( item => {
							return <Media
											title  = {item.title} 
											author = {item.author} 
											cover  = {item.cover} 
											type   = {item.type}
											key    = {item.id}
										/>
						})
					}
				</div>
			</div>
		)
	}
}

export default Playlist;