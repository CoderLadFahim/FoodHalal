import './AppCartStyles.scss';
import { useState, useContext, useEffect } from 'react';

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
	const [cartDiscardPromptDisplay, setCartDiscardPromptDisplay] =
		useState(false);
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
			? setUserOrdering(true)
			: alert('Add some items to cart first!');

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

	// generating the cart body content (using an immediately invoking function)
	const cartBodyContent = (() => {
		// rendering the cartDiscardingPrompt if user attempts to clear cart
		if (cartDiscardPromptDisplay)
			return (
				<CartDiscardPrompt
					cartItemsKeeper={keepCartItems}
					cartItemsDiscarder={discardCartItems}
				/>
			);

		// rendering a cart empty message
		if (!cartItems.length) return <CartEmptyDisplay cartHider={hideCart} />;

		// rendering the cart items if cartItems exist
		if (!userOrdering)
			return (
				<div className="cart-display">
					{' '}
					{cartItems.map(item => (
						<CartItem item={item} key={item.id} />
					))}{' '}
				</div>
			);
		// rendering the FormSubmissionView if user attempts to order items
		else return <FormSubmissionView clickHandler={resetCart} />;
	})();

	// disabling the vertical scroll on body when the cart is toggled
	useEffect(() => {
		document.body.style.overflowY = `${cartToggleState ? 'hidden' : ''}`;
	}, [cartToggleState]);

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

					<div className="cart-body">{cartBodyContent}</div>

					{/* CART FOOTER */}
					<CartFooter
						totalPrice={totalPrice}
						userOrderingState={userOrdering}
						userOrderingStateChanger={changeUserOrderingState}
					/>
				</div>
			)}
		</section>
	);
}

export default AppCart;
