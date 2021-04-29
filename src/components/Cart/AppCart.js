import './AppCartStyles.scss';
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartDiscardPrompt from './CartDiscardPrompt';
import CartFooter from './CartFooter';
import FormSubmissionView from '../FormSubmissionView';

function AppCart(props) {
	const { cartItems, dispatch } = useContext(CartContext);
	const [cartToggleState, setCartToggleState] = useState(false);
	// shows the cart clearing/discarding prompt display
	const [cartDiscardPromptDisplay, setCartDiscardPromptDisplay] = useState(
		false
	);
	const [userOrdering, setUserOrdering] = useState(false);

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
				Cart
			</div>

			{cartToggleState && (
				<section className="cart" style={{ border: '1px solid white' }}>
					{/* CART HEADER */}
					<CartHeader
						totalItemsInCart={totalItemsInCart}
						itemsExistInCart={cartItems.length == true}
						cartDiscardPromptDisplayer={() => setCartDiscardPromptDisplay(true)}
						cartHider={() => setCartToggleState(false)}
					/>

					{/* CART DISPLAY */}
					<div className="cart-display">
						{!userOrdering ? (
							cartItems.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<FormSubmissionView clickHandler={resetCart} />
						)}
					</div>

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
				</section>
			)}
		</section>
	);
}

export default AppCart;
