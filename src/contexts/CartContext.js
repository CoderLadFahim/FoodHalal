import { createContext, useReducer } from 'react';

export const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			// incrementing the item count if action.item exists in state
			const potentialItemExistance = state.find(
				item => item.id === action.item.id
			);

			if (potentialItemExistance)
				return cartReducer(state, {
					type: 'INCREMENT_ITEM_COUNT',
					itemID: action.item.id,
				});

			// adding action.item to state
			return [...state, action.item];
		case 'REMOVE_ITEM':
			return state.filter(item => item.id !== action.itemID);
		case 'INCREMENT_ITEM_COUNT':
			const itemToIncrement = state.find(item => item.id === action.itemID);
			itemToIncrement.count++;

			// removing the item with old count value and adding the new one with update count value
			return [
				...state.filter(item => item.id !== action.itemID),
				itemToIncrement,
			];
		case 'DECREMENT_ITEM_COUNT':
			// replicating the same functionality as the INCREMENT_ITEM_COUNT case  but decrementing
			const itemToDecrement = state.find(item => item.id === action.itemID);

			// removing the item if only 1 exists
			if (itemToDecrement.count === 1)
				return cartReducer(state, {
					type: 'REMOVE_ITEM',
					itemID: action.itemID,
				});

			itemToDecrement.count--;

			return [
				...state.filter(item => item.id !== action.itemID),
				itemToDecrement,
			];
		default:
			throw new Error('Invalid action type');
	}
};

function CartContextProvider({ children }) {
	const [cartItems, dispatch] = useReducer(cartReducer, [
		// {
		// 	name: 'Caviar Sandwich',
		// 	id: 'caviar_sandwich',
		// 	price: '123',
		// 	count: 1,
		// },
		// {
		// 	name: 'Dumplings',
		// 	id: 'dumplings',
		// 	price: '123',
		// 	count: 1,
		// },
		// {
		// 	name: 'Pumpkin Soup',
		// 	id: 'pumpkin_soup',
		// 	price: '123',
		// 	count: 1,
		// },
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
