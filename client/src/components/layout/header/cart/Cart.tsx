import Drawer from '@mui/material/Drawer';
import { FC } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { useOutside } from '../../../../hooks/useOutside';

import styles from './Cart.module.scss';

const Cart: FC = () => {
	const { ref, isShow, setIsShow } = useOutside(false);

	return (
		<div className={styles.cart} ref={ref}>
			<button className={styles.button} onClick={() => setIsShow(!isShow)}>
				<MdOutlineShoppingCart size={25} />
				<span>1000 $</span>
			</button>

			{isShow && (
				<Drawer
					anchor={'right'}
					open={isShow}
					onClose={() => setIsShow(!isShow)}
				>
					<div>Cart</div>
				</Drawer>
			)}
		</div>
	);
};

export default Cart;
