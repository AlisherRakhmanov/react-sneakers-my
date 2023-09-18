import { FC } from 'react';

import Catalog from '../../ui/catalog/Catalog';
import Heading from '../../ui/heading/Heading';
import Meta from '../../ui/meta/Meta';

import styles from './Home.module.scss';
import Search from './search/Search';
import { useProducts } from './useProducts';

const Home: FC = () => {
	const { data: products, isLoading } = useProducts();
	return (
		<Meta title='Все кроссовки'>
			<div className={styles.home}>
				<div className={styles.top}>
					<Heading title='Все кроссовки' />
					<Search />
				</div>
				<Catalog products={products || []} variant='horizontal' />
			</div>
		</Meta>
	);
};

export default Home;
