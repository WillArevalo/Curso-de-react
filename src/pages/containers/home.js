import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';
import HandleError from '../../error/containers/handle-error.js';
import VideoPlayer from '../../player/containers/video-player.js';

class Home extends Component {
	state = {
		modalVisible: false,
	}
	//Funcion de handleClick
	handleOpenModal = (event) => {
		this.setState({
			modalVisible: true,
		})
	}
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	// //Manejo de errores con componentDidCatch
	// //componentDidCatch(error, informacion acerca de el error)
	// componentDidCatch(err, info) {
	// 	this.setState({
	// 		handleError: true,
	// 	})
	// }
	render(){
		// //Comprobando que el componente sirve
		// if(this.state.handleError) {
		// 	return <p>Ohhh hay un error</p>
		// }
		return (
			<HandleError>
				<HomeLayout> 
					<Related />
					<Categories 
						categories={this.props.data.categories} 
						handleOpenModal = { this.handleOpenModal }
					/>
					<VideoPlayer
						autoplay
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal}>
								<h1>Hola</h1>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)//Haciendo condicionales(ternarios) si es true con la && seguria al siguiente comando
	}
}

export default Home;
