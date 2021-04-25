function AppCart(props) {
	return (
		<section className="app-cart">
			<div className="cart-toggler">Cart</div>

			<div className="cart" style={{ border: '1px solid white' }}>
				<div className="cart-header">
					<h2 className="cart-title">
						Cart <span className="items-count">10 items</span>
					</h2>

					<div className="cart-control-btns">
						<button className="close">X</button>
						<button className="minimize">-</button>
					</div>
				</div>

				<div className="cart-items-display"></div>

				<div className="cart-footer">
					<h3 className="total-price">
						Total: <span className="price">3800 Tk\-</span>
					</h3>

					<button>Order</button>
				</div>
			</div>
		</section>
	);
}

export default AppCart;
