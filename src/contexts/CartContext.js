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
	const [cartItems, dispatch] = useReducer(cartReducer, [
		/*
		{
			name: 'Beef Salami Crackers',
			id: 'beef_salami_crackers',
			price: '123',
			count: 1,
		},
		{
			name: 'Canape Salmon',
			id: 'canape_salmon',
			price: '123',
			count: 1,
		},
		{
			name: 'Caviar Sandwich',
			id: 'caviar_sandwich',
			price: '123',
			count: 1,
		},
		{
			name: 'Cheese Fig Salad',
			id: 'cheese_fig_salad',
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
			name: 'Egg Sandwich',
			id: 'egg_sandwich',
			price: '123',
			count: 1,
		},
		{
			name: 'French Fries',
			id: 'frech_fries',
			price: '123',
			count: 1,
		},
		{
			name: 'Fried Shrimp',
			id: 'fried_shrimp',
			price: '123',
			count: 1,
		},
		{
			name: 'Pumpkin Soup',
			id: 'pumpkin_soup',
			price: '123',
			count: 1,
		},
		{
			name: 'Vegetable Skewers',
			id: 'vegetable_skewers',
			price: '123',
			count: 1,
		},
		{
			name: 'Asian Noodles',
			id: 'asian_noodles',
			price: '123',
			count: 1,
		},
		{
			name: 'Beef Steak',
			id: 'beef_steak',
			price: '123',
			count: 1,
		},
		{
			name: 'Burger Fries',
			id: 'burger_and_fries',
			price: '123',
			count: 1,
		},
		{
			name: 'Cheese Pizza',
			id: 'cheese_pizza',
			price: '123',
			count: 1,
		},
		{
			name: 'Fried Chicken',
			id: 'fried_chicken',
			price: '123',
			count: 1,
		},
		{
			name: 'Grill Chicken',
			id: 'grill_chicken',
			price: '123',
			count: 1,
		},
		{
			name: 'Potato Casserole',
			id: 'potato_casserole',
			price: '123',
			count: 1,
		},
		{
			name: 'Punjabi rice',
			id: 'punjabi_rice',
			price: '123',
			count: 1,
		},
		{
			name: 'Shrimp Pasta',
			id: 'shrimp_pasta',
			price: '123',
			count: 1,
		},
		{
			name: 'Tacos with Lime',
			id: 'tacos_with_lime',
			price: '123',
			count: 1,
		},
		{
			name: 'Bread Croissants',
			id: 'bread_croissants',
			price: '123',
			count: 1,
		},
		{
			name: 'Cake Pops',
			id: 'cake_pops',
			price: '123',
			count: 1,
		},
		{
			name: 'Chocolate Cake',
			id: 'chocolate_cake',
			price: '123',
			count: 1,
		},
		{
			name: 'Chocolate Cupcakes',
			id: 'chocolate_cupcakes',
			price: '123',
			count: 1,
		},
		{
			name: 'Creme Brulee',
			id: 'creme_brulee',
			price: '123',
			count: 1,
		},
		{
			name: 'Doughnuts',
			id: 'doughnuts',
			price: '123',
			count: 1,
		},
		{
			name: 'Fresh Bluberries',
			id: 'fresh_bluberries',
			price: '123',
			count: 1,
		},
		{
			name: 'Fresh Raspberries',
			id: 'fresh_raspberries',
			price: '123',
			count: 1,
		},
		{
			name: 'Macarons',
			id: 'macarons',
			price: '123',
			count: 1,
		},
		{
			name: 'Mango Ice Cream',
			id: 'mango_icecream',
			price: '123',
			count: 1,
		},
		{
			name: 'Chocolate Milkshake',
			id: 'chocolate_milkshake',
			price: '123',
			count: 1,
		},
		{
			name: 'Coffee',
			id: 'coffee',
			price: '123',
			count: 1,
		},
		{
			name: 'Fruit Smoothie',
			id: 'fruit_smoothie',
			price: '123',
			count: 1,
		},
		{
			name: 'Hot Chocolate',
			id: 'hot_chocolate',
			price: '123',
			count: 1,
		},
		{
			name: 'Lemon Juice',
			id: 'lemon_juice',
			price: '123',
			count: 1,
		},
		{
			name: 'Lime Juice',
			id: 'lime_juice',
			price: '123',
			count: 1,
		},
		{
			name: 'Mango Juice',
			id: 'mango_juice',
			price: '123',
			count: 1,
		},
		{
			name: 'Mojitos',
			id: 'mojitos',
			price: '123',
			count: 1,
		},
		{
			name: 'Red Tea',
			id: 'red_tea',
			price: '123',
			count: 1,
		},
		{
			name: 'Strawberry Milkshake',
			id: 'strawberry_milkshake',
			price: '123',
			count: 1,
		},
		// */
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
