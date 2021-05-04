import './CartEmptyDisplayStyles.scss';
import { useLocation, Link } from 'react-router-dom';

function CartEmptyDisplay() {
	const { pathname: currentRoutePath } = useLocation();

	return (
		<div className="cart-empty-display">
			<h3 className="cart-empty-msg">You don't have any items in your cart</h3>

			{currentRoutePath !== '/menu' && (
				<Link to="/menu">
					<button className="btn btn-secondary">ORDER NOW</button>
				</Link>
			)}
		</div>
	);
}

export default CartEmptyDisplay;
