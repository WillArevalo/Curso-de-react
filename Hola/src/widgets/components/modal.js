import React from 'react';

// las propiedades del click viene de propiedades
function Modal(props){
	return (
		<div>
			Esto es un modal
			{props.children}
		</div>
	)
}

export default Modal;