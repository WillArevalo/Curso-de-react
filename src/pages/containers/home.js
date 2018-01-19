import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';

class Home extends Component {
	state = {
		modalVisible: false,
	}
	handleOpenModal = () => {
		//Esto sirve para setear estados
		this.setState({
			modalVisible:true,
		})
	}
	//Funcion de handleClick
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	render(){
		return (
			<HomeLayout> 
				<Related />
				<Categories categories={this.props.data.categories}/>
				<Modal>
					<h1>
						Esto es un portal
					</h1>
				</Modal>
			</HomeLayout>
		)//Haciendo condicionales(ternarios) si es true con la && seguria al siguiente comando
	}
}

export default Home;
