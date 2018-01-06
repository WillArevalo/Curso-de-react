import React from 'react';
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

export default Media;