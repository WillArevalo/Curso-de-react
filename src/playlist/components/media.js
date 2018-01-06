import React from 'react';
//Importando estilos
import './media.css';
class Media extends React.Component {
	render(){
		return(
			<div className="Media">
				<div className="Media-cover">
					<img className="Media-image" src="./images/covers/bitcoin.jpg" alt="" width={260} height={160}/>
					<h3 className="Media-title">¿Por qué aprender React?</h3>
					<p className="Media-author">Will Arevalo</p>
				</div>
			</div>
		)
	}
}

export default Media;