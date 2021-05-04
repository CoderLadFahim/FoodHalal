import './AppCartStyles.scss';
import { useState, useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartDiscardPrompt from './CartDiscardPrompt';
import CartEmptyDisplay from './CartEmptyDisplay';
import CartFooter from './CartFooter';
import FormSubmissionView from '../FormSubmissionView';

function AppCart(props) {
	const { cartItems, dispatch } = useContext(CartContext);
	const [cartToggleState, setCartToggleState] = useState(false);
	// shows the cart clearing/discarding prompt display
	const [cartDiscardPromptDisplay, setCartDiscardPromptDisplay] = useState(
		false
	);
	// this state, triggers the FormSubmissionView if user clicks the order btn
	const [userOrdering, setUserOrdering] = useState(false);
	// getting the current location to show menu-link if cart is empty and user is not on the menu page

	const totalItemsInCart = cartItems.reduce((a, v) => a + v.count, 0);
	const totalPrice = cartItems
		.map(item => item.count * item.price)
		.reduce((a, v) => a + v, 0);

	const resetCart = () => {
		setUserOrdering(false);
		dispatch({ type: 'CLEAR_CART' });
		setCartToggleState(false);
	};

	return (
		<section className="app-cart">
			<div
				className="cart-toggler"
				onClick={() => setCartToggleState(prevState => !prevState)}
			>
				<FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
				<span className="quantity-peek">{totalItemsInCart}</span>
			</div>

			{cartToggleState && (
				<div className="cart" style={{ border: '1px solid white' }}>
					{/* CART HEADER */}
					<CartHeader
						totalItemsInCart={totalItemsInCart}
						itemsExistInCart={cartItems.length}
						cartDiscardPromptDisplayer={() => setCartDiscardPromptDisplay(true)}
						cartHider={() => setCartToggleState(false)}
					/>

					{/* AppCart displays a message if the cart is empty and shows an order btn if user os not on the menu page, else it shows the CartItems */}
					{!cartItems.length ? (
						<CartEmptyDisplay cartHider={() => setCartToggleState()} />
					) : (
						<div className="cart-display">
							{/* CART DISPLAY */}
							{!userOrdering ? (
								cartItems.map(item => <CartItem item={item} key={item.id} />)
							) : (
								<FormSubmissionView clickHandler={resetCart} />
							)}
						</div>
					)}

					{/* CART FOOTER */}
					<CartFooter
						totalPrice={totalPrice}
						userOrderingState={userOrdering}
						userOrderingStateChanger={() =>
							cartItems.length
								? setUserOrdering(prevState => !prevState)
								: alert('Order some items first!')
						}
					/>

					{/* CART DISCARD PROMPT */}
					{cartDiscardPromptDisplay && (
						<CartDiscardPrompt
							cartItemsKeeper={() => setCartDiscardPromptDisplay(false)}
							cartItemsDiscarder={() => {
								dispatch({ type: 'CLEAR_CART' });
								setCartDiscardPromptDisplay(false);
							}}
						/>
					)}
				</div>
			)}
			<div className="backdrop"></div>
		</section>
	);
}

export default AppCart;
