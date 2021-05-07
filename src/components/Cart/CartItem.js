import './CartItemStyles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import CountControl from '../CountControl';

function CartItem({ item: { name, count, price, id } }) {
	const { dispatch } = useContext(CartContext);

	return (
		<div className="cart-item">
			<div className="item-label">
				<span className="item-name">{name}</span> <br />
				<span className="item-price">{price} Tk/-</span>
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

			{/* <button
				className="remove-btn"
				onClick={() => dispatch({ type: 'REMOVE_ITEM', itemID: id })}
			> */}
			<FontAwesomeIcon
				className="remove-btn"
				onClick={() => dispatch({ type: 'REMOVE_ITEM', itemID: id })}
				icon={faTrash}
			/>
			{/* </button> */}
		</div>
	);
}

export default CartItem;
