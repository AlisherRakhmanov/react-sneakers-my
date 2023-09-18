import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getProductsUrl } from '../../../../config/url.config';
import { IProduct } from '../../../../types/product.types';

const CatalogItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Link to={getProductsUrl(product.slug)}>
			<img src={product.image} alt={product.title} width={150} height={150} />
		</Link>
	);
};

export default CatalogItem;
