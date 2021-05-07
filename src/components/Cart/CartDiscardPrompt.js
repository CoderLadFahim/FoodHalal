import './CartDiscardPromptStyles.scss';

function CartDiscardPrompt({ cartItemsKeeper, cartItemsDiscarder }) {
	return (
		<div className="cart-clear-confirm">
			<h3 className="prompt">Are you sure you want to clear your cart?</h3>

			<div className="confirm-btns">
				<button className="btn keep-btn" onClick={cartItemsKeeper}>
					Keep
				</button>
				<button
					className="btn btn-secondary discard-btn"
					onClick={cartItemsDiscarder}
				>
					Clear
				</button>
			</div>
		</div>
	);
}

export default CartDiscardPrompt;
