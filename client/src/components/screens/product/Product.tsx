import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { ProductService } from '../../../services/product.service';
import Layout from '../../layout/Layout';
import Heading from '../../ui/heading/Heading';

import styles from './Product.module.scss';
import ProductGallery from './product-gallery/ProductGallery';
import ProductInformation from './product-information/ProductInformation';

const Product: FC = () => {
	const { slug } = useParams();
	const { data: product, isSuccess } = useQuery(
		['get product by slug', slug],
		() => ProductService.getBySlug(slug),
		{
			select: ({ data }) => data
		}
	);

	return (
		<Layout>
			<Helmet title={product?.title} />
			<div className={styles.product}>
				<Heading title={product?.title} backLink />

				{isSuccess ? (
					<div className={styles.content}>
						<ProductGallery images={product?.images} />
						<ProductInformation product={product} />
					</div>
				) : (
					<div>Not Found</div>
				)}
			</div>
		</Layout>
	);
};

export default Product;
