import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { ProductService } from '../../../services/product.service';
import Layout from '../../layout/Layout';
import Heading from '../../ui/heading/Heading';

import styles from './Product.module.scss';

const Product: FC = () => {
	const { slug } = useParams();
	const { data } = useQuery(
		['get product by slug', slug],
		() => ProductService.getBySlug(slug),
		{
			select: ({ data }) => data
		}
	);
	return (
		<Layout>
			<Helmet title={data?.title} />
			<div className={styles.product}>
				<Heading title={data?.title} backLink />
			</div>
		</Layout>
	);
};

export default Product;
