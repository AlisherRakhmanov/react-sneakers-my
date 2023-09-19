import { FC } from 'react';

import styles from './Header.module.scss';
import Cart from './cart/Cart';
import FavoriteMenu from './favorite-menu/FavoriteMenu';
import Logo from './logo/Logo';
import ProfileMenu from './profile-menu/ProfileMenu';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.menu}>
				<Cart />
				<FavoriteMenu />
				<ProfileMenu />
			</div>
		</header>
	);
};

export default Header;
