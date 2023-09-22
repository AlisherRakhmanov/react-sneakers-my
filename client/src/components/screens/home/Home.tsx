import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../layout/Layout';
import Catalog from '../../ui/catalog/Catalog';
import Heading from '../../ui/heading/Heading';
import Slider from '../../ui/slider/Slider';

import styles from './Home.module.scss';
import Search from './search/Search';
import { useProducts } from './useProducts';

const Home: FC = () => {
	const { data: products, isLoading } = useProducts();

	const slides = products?.slice(0, 5);
	return (
		<Layout>
			<div className={styles.home}>
				<Helmet title='Все кроссовки' />

				{products?.length && <Slider slides={slides || []} />}

				<div className={styles.top}>
					<Heading title='Все кроссовки' />
					<Search />
				</div>
				{isLoading ? (
					<div>...Loading</div>
				) : (
					<Catalog products={products || []} />
				)}
			</div>
		</Layout>
	);
};

export default Home;
