import React from 'react';
import Playlist from '../../playlist/components/playlist.js';

//material
import Typography from 'material-ui/Typography';

function Category (props) {
	return (
		<div className="Category">
			<Typography type="headline" gutterBottom>
					{props.description}
			</Typography>
			<Typography type="display1" gutterBottom>
					{props.title}
			</Typography>
			<Playlist 
				handleOpenModal = {props.handleOpenModal}
				playlist={props.playlist}
			/>
		</div>
	)
}

export default Category;