import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.item];
		case 'REMOVE_ITEM':
			return state.filter(item => item.id !== action.itemID);
		case 'INCREMENT_ITEM_COUNT':
			return [
				...state.map(item =>
					item.id === action.itemID ? { ...item, count: item.count + 1 } : item
				),
			];
		case 'DECREMENT_ITEM_COUNT':
			return [
				...state.map(item =>
					item.id === action.itemID ? { ...item, count: item.count - 1 } : item
				),
			];
		case 'CLEAR_CART':
			return [];
		default:
			throw new Error('Invalid action type');
	}
};

function CartContextProvider({ children }) {
	const [cartItems, dispatch] = useReducer(cartReducer, []);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				dispatch,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartContextProvider;
