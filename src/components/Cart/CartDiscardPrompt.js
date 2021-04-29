import './CartDiscardPromptStyles.scss';

function CartDiscardPrompt({ cartItemsKeeper, cartItemsDiscarder }) {
	return (
		<div className="cart-clear-confirm">
			<p className="prompt">Are you sure you want to clear your cart?</p>

			<div className="confirm-btns">
				<button className="keep-btn" onClick={cartItemsKeeper}>
					Keep
				</button>
				<button className="discard-btn" onClick={cartItemsDiscarder}>
					Clear
				</button>
			</div>
		</div>
	);
}

export default CartDiscardPrompt;
