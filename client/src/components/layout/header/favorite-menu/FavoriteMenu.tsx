import { FC } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

import styles from './FavoriteMenu.module.scss';

const FavoriteMenu: FC = () => {
	return (
		<Link to={'/favorite'} className={styles.favorite}>
			<MdFavoriteBorder size={25} />
		</Link>
	);
};

export default FavoriteMenu;
