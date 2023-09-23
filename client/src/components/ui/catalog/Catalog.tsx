import { FC } from 'react';

import { IProduct } from '../../../types/product.types';
import SkeletonLoader from '../skeleton-loader/SkeletonLoader';

import styles from './Catalog.module.scss';
import CatalogItem from './catalog-item/CatalogItem';

interface ICatalog {
	products: IProduct[];
	isLoading: boolean;
}

const Catalog: FC<ICatalog> = ({ products, isLoading }) => {
	return (
		<>
			<div className={styles.catalog}>
				{products.length
					? products.map(product => (
							<CatalogItem key={product._id} product={product} />
					  ))
					: null}
				{isLoading && (
					<div>
						<SkeletonLoader count={1} className='h-52 w-52' />
					</div>
				)}
			</div>
			{!products.length && <p className={styles.notfound}>Нечего не найдено</p>}
		</>
	);
};

export default Catalog;
