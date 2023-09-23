import cn from 'clsx';
import { FC } from 'react';
import { MdAdd, MdRemove } from 'react-icons/md';

import { useActions } from '../../../../../../hooks/useActions';
import { ICartItem } from '../../../../../../types/cart.types';

import styles from './CartActions.module.scss';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { changeQuantity } = useActions();
	const count = item.quantity;

	const handleMinus = () => {
		if (count > 1) changeQuantity({ id: item.product._id, type: 'minus' });
	};

	const handlePlus = () => {
		if (count < 10) changeQuantity({ id: item.product._id, type: 'plus' });
	};

	return (
		<div className={styles.action}>
			<button
				onClick={handleMinus}
				disabled={count < 1}
				className={cn({
					[styles.disabled]: count == 1
				})}
			>
				<MdRemove />
			</button>
			<input type='text' disabled value={count} />
			<button
				onClick={handlePlus}
				disabled={count > 10}
				className={cn({
					[styles.disabled]: count == 10
				})}
			>
				<MdAdd />
			</button>
		</div>
	);
};

export default CartActions;
