import { FC } from 'react';

import styles from './CartEmpty.module.scss';

const CartEmpty: FC = () => {
	return (
		<div className={styles.empty}>
			<div className={styles.info}>
				<img src='/empty-cart.png' alt='empty-cart' />
				<h3>Корзина пустая</h3>
				<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
			</div>
		</div>
	);
};

export default CartEmpty;
