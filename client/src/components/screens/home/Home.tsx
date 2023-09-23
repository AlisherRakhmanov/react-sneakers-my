import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../layout/Layout';
import Catalog from '../../ui/catalog/Catalog';
import Heading from '../../ui/heading/Heading';
import SkeletonLoader from '../../ui/skeleton-loader/SkeletonLoader';
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

				{isLoading ? (
					<div>
						<SkeletonLoader
							count={1}
							className='h-[300px] w-full rounded-3xl'
						/>
					</div>
				) : (
					<Slider slides={slides || []} />
				)}

				<div className={styles.top}>
					<Heading title='Все кроссовки' />
					<Search />
				</div>
				<Catalog products={products || []} isLoading={isLoading} />
			</div>
		</Layout>
	);
};

export default Home;
