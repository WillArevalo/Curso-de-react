import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';

class Home extends Component {
	state = {
		modalVisible: true,
	}
	//Funcion de handleClick
	handleCloseModalClick = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	render(){
		return (
			<HomeLayout> 
				<Related />
				<Categories categories={this.props.data.categories} />
				{
					this.state.modalVisible &&
					<ModalContainer>
						<Modal handleClick={this.handleCloseModalClick}>
							<h1>Hola</h1>
						</Modal>
					</ModalContainer>
				}
			</HomeLayout>
		)//Haciendo condicionales(ternarios) si es true con la && seguria al siguiente comando
	}
}

export default Home;
