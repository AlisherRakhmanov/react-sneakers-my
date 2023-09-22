import { FC } from 'react';

import { IProduct } from '../../../types/product.types';

import styles from './Catalog.module.scss';
import CatalogItem from './catalog-item/CatalogItem';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<>
			<div className={styles.catalog}>
				{products.length
					? products.map(product => (
							<CatalogItem key={product._id} product={product} />
					  ))
					: null}
			</div>
			{!products.length && <p className={styles.notfound}>Нечего не найдено</p>}
		</>
	);
};

export default Catalog;
