import React from 'react';
//Importamos un validador de datos en propiedades
import PropTypes from 'prop-types';
//Importando estilos
import './media.css';
class Media extends React.Component {
	render(){
		//recojiendo las propiedades
		const { title, author, image } = this.props;
		return(
			<div className="Media">
				<div className="Media-cover">
					<img className="Media-image" src={image} alt="" width={260} height={160}/>
					<h3 className="Media-title">{title}</h3>
					<p className="Media-author">{author}</p>
				</div>
			</div>
		)
	}
}
//Le asignamos los proptypes a nuestro componente media
Media.proptypes = {
	image: PropTypes.string,
	//Si quiero que mi parametro sea requerido
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	//Si quiero escojer entre un tipo u otro unicamnete
	type: PropTypes.oneOf(['video','audio']),
}

export default Media;