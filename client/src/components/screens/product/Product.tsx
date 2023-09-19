import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../layout/Layout';
import Heading from '../../ui/heading/Heading';

import styles from './Product.module.scss';

const Product: FC = () => {
	return (
		<Layout>
			<Helmet title='Продукт' />
			<div className={styles.product}>
				<Heading title='Продукт' backLink />
			</div>
		</Layout>
	);
};

export default Product;
