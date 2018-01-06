import React from 'react';
//Importando estilos
import './media.css';
class Media extends React.Component {
	render(){
		//Creando estilos inline, con un json
		const styles = {
			container: {
				fontSize: '1rem',
				backgroundColor: 'f1f1f1',
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '2px solid #ff0909',
				borderRadius: '3%'
			}
		}
		return(
			<div style={styles.container}>
				<div>
					<img src="./images/covers/bitcoin.jpg" alt="" width={260} height={160}/>
					<h3>¿Por qué aprender React?</h3>
					<p>Will Arevalo</p>
				</div>
			</div>
		)
	}
}

export default Media;