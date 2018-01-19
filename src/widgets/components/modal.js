import React from 'react';
import './modal.css';

function Modal(props){
	return(
		// las propiedades del click viene de propiedades
		<div className="Modal">
			{props.children}
		</div>
	)
}

export default Modal;