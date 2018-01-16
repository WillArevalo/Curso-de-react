import React from 'react';
import Media from './media.js';

//material
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  playlist: {
  	marginLeft: 10,
  }
});

function Playlist(props){
		const { classes } = props;
		const {titulo, descripcion, lista} = props // --- playlist
		return (
			<div className = {classes.playlist}>
				<Typography type="headline" gutterBottom>
					{descripcion}
				</Typography>
				<Typography type="display1" gutterBottom>
					{titulo}
				</Typography>
				<Grid container>
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
				</Grid>
			</div>
		)
}

export default withStyles(styles)(Playlist);
