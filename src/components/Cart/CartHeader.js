import './CartHeaderStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartHeader({
	totalItemsInCart,
	itemsExistInCart,
	cartDiscardPromptDisplayer,
	cartHider,
}) {
	return (
		<div className="cart-header">
			<h2 className="cart-title">
				<FontAwesomeIcon
					icon={faShoppingCart}
					className="cart-icon"
					style={{ color: `${!itemsExistInCart ? '#000' : '#f1f1f1'}` }}
				/>
				Cart{' '}
				<span className="items-count">
					{totalItemsInCart} item{totalItemsInCart !== 1 ? 's' : ''}
				</span>
			</h2>

			<div className="cart-toggle">
				{itemsExistInCart ? (
					<FontAwesomeIcon
						className="close-btn"
						icon={faTimes}
						onClick={cartDiscardPromptDisplayer}
					/>
				) : (
					''
				)}
				<FontAwesomeIcon
					className="min-btn"
					onClick={cartHider}
					icon={faWindowMinimize}
				/>
			</div>
		</div>
	);
}

export default CartHeader;
