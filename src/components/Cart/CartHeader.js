import './CartHeaderStyles.scss';

function CartHeader({
	totalItemsInCart,
	itemsExistInCart,
	cartDiscardPromptDisplayer,
	cartHider,
}) {
	return (
		<div className="cart-header" style={{ border: '1px solid goldenrod' }}>
			<h2 className="cart-title">
				Cart <span className="items-count">{totalItemsInCart} items</span>
			</h2>

			<div className="cart-control-btns">
				{itemsExistInCart ? (
					<button className="close" onClick={cartDiscardPromptDisplayer}>
						X
					</button>
				) : (
					''
				)}
				<button className="minimize" onClick={cartHider}>
					-
				</button>
			</div>
		</div>
	);
}

export default CartHeader;
