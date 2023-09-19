import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getProductsUrl } from '../../../../../config/url.config';
import { IProduct } from '../../../../../types/product.types';
import { priceToCurrency } from '../../../../../utils/priceToCurrency';

import styles from './SearchList.module.scss';

const SearchList: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.list}>
			{products.length ? (
				products.map(product => (
					<Link to={getProductsUrl(product.slug)} className={styles.item}>
						<img
							src={product.image}
							alt={product.title}
							width={100}
							height={100}
						/>
						<div className={styles.info}>
							<h3>{product.title}</h3>
							<p>{priceToCurrency(product.price)}</p>
						</div>
					</Link>
				))
			) : (
				<div className={styles.notfound}>Нечего не найдено</div>
			)}
		</div>
	);
};

export default SearchList;
