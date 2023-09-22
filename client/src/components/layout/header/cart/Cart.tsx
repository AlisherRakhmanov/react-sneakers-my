import Drawer from '@mui/material/Drawer';
import { FC, useState } from 'react';
import { MdClose, MdOutlineShoppingCart } from 'react-icons/md';

import { useCart } from '../../../../hooks/useCart';
import { priceToCurrency } from '../../../../utils/priceToCurrency';

import styles from './Cart.module.scss';
import CartEmpty from './cart-empty/CartEmpty';
import CartItem from './cart-item/CartItem';

const Cart: FC = () => {
	const [isShow, setIsShow] = useState(false);
	const { cart, total } = useCart();

	return (
		<div className={styles.cart}>
			<button className={styles.button} onClick={() => setIsShow(!isShow)}>
				<MdOutlineShoppingCart size={25} />
				<span>{priceToCurrency(total)}</span>
			</button>

			{isShow && (
				<Drawer
					anchor={'right'}
					open={isShow}
					onClose={() => setIsShow(!isShow)}
				>
					<div className={styles.drawer}>
						<div className={styles.top}>
							<h1>Корзина</h1>
							<button onClick={() => setIsShow(false)}>
								<MdClose size={25} />
							</button>
						</div>
						{cart.length ? (
							cart.map(item => <CartItem key={item.id} item={item} />)
						) : (
							<CartEmpty />
						)}
					</div>
				</Drawer>
			)}
		</div>
	);
};

export default Cart;
