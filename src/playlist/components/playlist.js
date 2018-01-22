import React from 'react';
import Media from './media.js';
//material
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  playlist: {
  	marginLeft: 10,
  	marginBottom: 100,
  }
});
//Cuando el componente no guarda datos o algo similar se puede transformar 
//a un componente funcional, que solo vive en la funcion
function Playlist(props) {
	const { classes } = props;
	// const {titulo, descripcion, lista} = props // --- playlist
	return (
		<Grid container className={classes.playlist}>
			{
				props.playlist.map((item) =>{
					return (
						<Media 
							{...item} 
							key={item.id} 
							handleClick={props.handleOpenModal}
						/>
					)
				})
			}
		</Grid>
	)
}

export default withStyles(styles) (Playlist);