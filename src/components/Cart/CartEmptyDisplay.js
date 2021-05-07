import './CartEmptyDisplayStyles.scss';
import { useLocation, Link } from 'react-router-dom';

function CartEmptyDisplay({ cartHider }) {
	const { pathname: currentRoutePath } = useLocation();

	return (
		<div className="cart-empty-display">
			<h3 className="cart-empty-msg">You don't have any items in your cart</h3>

			{currentRoutePath !== '/menu' && (
				<Link to="/menu">
					<button onClick={cartHider} className="btn btn-secondary order-btn">
						ORDER NOW
					</button>
				</Link>
			)}
		</div>
	);
}

export default CartEmptyDisplay;
