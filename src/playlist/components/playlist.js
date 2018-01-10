import React from 'react';
import Media from './media.js';
import './playlist.css';
//Cuando el componente no guarda datos o algo similar se puede transformar 
//a un componente funcional, que solo vive en la funcion
function Playlist(props) {
	const {titulo, descripcion, lista} = props // --- playlist
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

export default Playlist;