import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return [...state, action.item];
		case 'REMOVE_ITEM':
			return state.filter(item => item.id !== action.itemID);
		case 'INCREMENT_ITEM_COUNT':
			const itemToIncrement = state.find(item => item.id === action.itemID);
			return [
				...state.filter(item => item.id !== action.itemID),
				{ ...itemToIncrement, count: itemToIncrement.count + 1 },
			];
		case 'DECREMENT_ITEM_COUNT':
			const itemToDecrement = state.find(item => item.id === action.itemID);
			return [
				...state.filter(item => item.id !== action.itemID),
				{
					...itemToDecrement,
					count: itemToDecrement.count - 1,
				},
			];
		default:
			throw new Error('Invalid action type');
	}
};

function CartContextProvider({ children }) {
	const [cartItems, dispatch] = useReducer(cartReducer, [
		{
			name: 'Caviar Sandwich',
			id: 'caviar_sandwich',
			price: '123',
			count: 1,
		},
		{
			name: 'Dumplings',
			id: 'dumplings',
			price: '123',
			count: 1,
		},
		{
			name: 'Pumpkin Soup',
			id: 'pumpkin_soup',
			price: '123',
			count: 1,
		},
	]);

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
