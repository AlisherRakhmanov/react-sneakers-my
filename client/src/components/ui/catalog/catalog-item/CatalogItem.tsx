import cn from 'clsx';
import { FC } from 'react';
import { HiPlus } from 'react-icons/hi';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { getProductsUrl } from '../../../../config/url.config';
import { IProduct } from '../../../../types/product.types';
import { priceToCurrency } from '../../../../utils/priceToCurrency';

import styles from './CatalogItem.module.scss';

const CatalogItem: FC<{ product: IProduct }> = ({ product }) => {
	const handleClickCart = () => {
		alert('world');
	};

	const handleClickFavorite = () => {
		alert('hello');
	};

	return (
		<div className={styles.item}>
			<button
				className={cn(styles.plus, styles.favorite)}
				onClick={handleClickFavorite}
			>
				<MdFavoriteBorder size={20} />
			</button>

			<Link to={getProductsUrl(product.slug)}>
				<img src={product.image} alt={product.title} width={150} height={150} />
				<h3>{product.title}</h3>
			</Link>

			<div className={styles.info}>
				<div className={styles.price}>
					<p>Цена:</p>
					<b>{priceToCurrency(product.price)}</b>
				</div>

				<button className={styles.plus} onClick={handleClickCart}>
					<HiPlus size={20} />
				</button>
			</div>
		</div>
	);
};

export default CatalogItem;
