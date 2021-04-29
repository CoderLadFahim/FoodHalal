import './CartItemStyles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CountControl from '../CountControl';

function CartItem({ item: { name, count, price, id } }) {
	const { dispatch } = useContext(CartContext);

	return (
		<div className="cart-item" style={{ border: '1px solid pink' }}>
			<div className="item-label">
				<span className="item-name">{name}</span> <br />
				<span className="item-price">{price}</span>
			</div>

			<CountControl
				incrementor={() =>
					dispatch({ type: 'INCREMENT_ITEM_COUNT', itemID: id })
				}
				decrementor={() =>
					dispatch({ type: 'DECREMENT_ITEM_COUNT', itemID: id })
				}
			>
				{count}
			</CountControl>

			<button
				className="remove-btn"
				onClick={() => dispatch({ type: 'REMOVE_ITEM', itemID: id })}
			>
				Del
			</button>
		</div>
	);
}

export default CartItem;
