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

	const totalItemsInCart = cartItems.reduce((a, v) => a + v.count, 0);
	const totalPrice = cartItems
		.map(item => item.count * item.price)
		.reduce((a, v) => a + v, 0);

	const hideCart = () => setCartToggleState(false);
	const showCartDiscardPrompt = () => setCartDiscardPromptDisplay(true);

	const changeUserOrderingState = () =>
		cartItems.length
			? setUserOrdering(prevState => !prevState)
			: alert('Order some items first!');

	const keepCartItems = () => setCartDiscardPromptDisplay(false);
	const discardCartItems = () => {
		dispatch({ type: 'CLEAR_CART' });
		setCartDiscardPromptDisplay(false);
	};

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
				<div className="cart">
					{/* CART HEADER */}
					<CartHeader
						totalItemsInCart={totalItemsInCart}
						itemsExistInCart={cartItems.length}
						cartDiscardPromptDisplayer={showCartDiscardPrompt}
						cartHider={hideCart}
					/>

					<div className="cart-body">
						{/* AppCart displays a message if the cart is empty and shows an order btn if user os not on the menu page, else it shows the CartItems */}
						{!cartItems.length ? (
							<CartEmptyDisplay cartHider={hideCart} />
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
					</div>

					{/* CART FOOTER */}
					<CartFooter
						totalPrice={totalPrice}
						userOrderingState={userOrdering}
						userOrderingStateChanger={changeUserOrderingState}
					/>

					{/* CART DISCARD PROMPT */}
					{cartDiscardPromptDisplay && (
						<CartDiscardPrompt
							cartItemsKeeper={keepCartItems}
							cartItemsDiscarder={discardCartItems}
						/>
					)}
				</div>
			)}
			<div className="backdrop"></div>
		</section>
	);
}

export default AppCart;
