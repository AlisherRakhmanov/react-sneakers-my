import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../layout/Layout';
import Catalog from '../../ui/catalog/Catalog';
import Heading from '../../ui/heading/Heading';

import styles from './Favorite.module.scss';
import { useFavorite } from './useFavorite';

const Favorite: FC = () => {
	const { isLoading, favorites } = useFavorite();

	return (
		<Layout>
			<Helmet title='Избранное' />
			<div className={styles.favorite}>
				<Heading title='Избранное' backLink />
				<Catalog products={favorites || []} isLoading={isLoading} />
			</div>
		</Layout>
	);
};

export default Favorite;
