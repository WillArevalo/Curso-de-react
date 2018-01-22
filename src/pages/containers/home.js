import React, { Component } from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js';
<<<<<<< HEAD
import ModalContainer from '../../widgets/containers/modal.js';
import Modal from '../../widgets/components/modal.js';
=======
>>>>>>> parent of 2e3c132... Portales

class Home extends Component {
	render(){
		return (
			<HomeLayout> 
				<Related />
				<Categories categories={this.props.data.categories} />
<<<<<<< HEAD
				<ModalContainer>
					<Modal>
					</Modal>
					<h1>
						Esto es un portal
					</h1>
				</ModalContainer>
=======
>>>>>>> parent of 2e3c132... Portales
			</HomeLayout>
		)
	}
}

export default Home;
