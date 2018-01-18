import React from 'react';
import './modal.css';

function Modal(props){
	return(
		// las propiedades del click viene de propiedades
		<div className="Modal">
			Esto es un modal
			{props.children}
		<button onClick={props.handleClick} className="Modal-close"></button>
		</div>
	)
}

export default Modal;