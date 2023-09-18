import cn from 'clsx';
import { FC } from 'react';

import { IProduct } from '../../../types/product.types';

import styles from './Catalog.module.scss';
import CatalogItem from './catalog-item/CatalogItem';

interface ICatalog {
	products: IProduct[];
	variant: 'horizontal' | 'vertical';
}

const Catalog: FC<ICatalog> = ({ products, variant }) => {
	return (
		<div
			className={cn(styles.catalog, {
				[styles.horizontal]: variant === 'horizontal',
				[styles.vertical]: variant === 'vertical'
			})}
		>
			{products.length &&
				products.map(product => (
					<CatalogItem key={product._id} product={product} />
				))}
		</div>
	);
};

export default Catalog;
