import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<Link to={'/'}>
				<img src='/logo.png' alt='logo' width={42} height={42} />
			</Link>

			<div className={styles.title}>
				<h1>React Sneakers</h1>
				<p>Магазин лучших кроссовок</p>
			</div>
		</div>
	);
};

export default Logo;
