import { createContext, Component } from 'react';

export const CartContext = createContext();

export default class CartContextProvider extends Component {
	constructor(props) {
		super(props);
		this.state = [];
	}

	addItem = item => this.setState([...this.state, item]);
}
