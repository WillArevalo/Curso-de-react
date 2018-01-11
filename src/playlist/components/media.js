//con material-ui-next
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import React from 'react';
//Importamos un validador de datos en propiedades
import PropTypes from 'prop-types';

const styles = {
  card: {
    width: 290,
    marginRight: 10,
    marginBottom: 10,
    cursor: 'pointer',
  },
  media: {
    height: '200px',
  },
};
function Media(props) {
	const { classes } = props;
	// Para utilizar el estado de los componentes y poder utilizar datos dinamicos inicializamos
	//los estados
	//seteamos los valores iniciales del estado
	// state = {
	// 	author: 'Will Arevalo',
	// } 
	//constructor con EMC6
	// constructor(props){
	// 	super(props)
	// 	this.handleClick = this.handleClick.bind(this);
	// }
	//Creamos la funcion que se ejecuta cuando sea click en el div
	// handleClick = (event) => {
	// 	//console.log(this.props.cover);
	// 	this.setState({
	// 		author: 'Ricardo Celis'
	// 	})
	// }

	return(
		//Creamos un escuchador de eventos con onClick
		<div>
			<Grid item xs={12} sm={12}>
			<Card className={classes.card}>
				<CardMedia 
					width={290} 
					height={200}
					className={classes.media}
			        image={props.cover}
			        title="cover"
				/>
				<CardContent>
		          <Typography type="headline" component="h2">
		            {props.title}
		          </Typography>
		          <Typography component="p">
		            {props.author}
		          </Typography>
		        </CardContent>
			</Card>
			</Grid>
		</div>
	)
}
//Le asignamos los proptypes a nuestro componente media
Media.proptypes = {
	cover: PropTypes.string,
	//Si quiero que mi parametro sea requerido
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	//Si quiero escojer entre un tipo u otro unicamnete
	type: PropTypes.oneOf(['video','audio']),
}

export default withStyles(styles)(Media);