import { FC } from 'react';
import { MdDeleteOutline } from 'react-icons/md';

import { useActions } from '../../../../../hooks/useActions';
import { ICartItem } from '../../../../../types/cart.types';
import { priceToCurrency } from '../../../../../utils/priceToCurrency';

import styles from './CartItem.module.scss';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart } = useActions();

	return (
		<div className={styles.item}>
			<img
				src={item.product.images[0]}
				alt={item.product.title}
				width={70}
				height={70}
			/>
			<div className={styles.info}>
				<h3>{item.product.title}</h3>
				<p>{priceToCurrency(item.product.price)}</p>
			</div>
			<button
				className={styles.delete}
				onClick={() => removeFromCart({ id: item.product._id })}
			>
				<MdDeleteOutline size={25} />
			</button>
		</div>
	);
};

export default CartItem;
