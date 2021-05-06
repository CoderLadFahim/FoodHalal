import './CartFooterStyles.scss';

function CartFooter({
	totalPrice,
	userOrderingStateChanger,
	userOrderingState,
}) {
	return (
		<div className="cart-footer">
			<h3 className="total-price">
				Total: <span className="price">{totalPrice} Tk\-</span>
			</h3>

			{!userOrderingState && (
				<button className="btn order-btn" onClick={userOrderingStateChanger}>
					Order
				</button>
			)}
		</div>
	);
}

export default CartFooter;
