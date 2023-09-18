import { FC } from 'react';

import styles from './Header.module.scss';
import Cart from './cart/Cart';
import Favorite from './favorite/Favorite';
import Logo from './logo/Logo';
import Profile from './profile/Profile';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.menu}>
				<Cart />
				<Favorite />
				<Profile />
			</div>
		</header>
	);
};

export default Header;
