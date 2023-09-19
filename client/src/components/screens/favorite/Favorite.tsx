import { FC } from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../layout/Layout';
import Heading from '../../ui/heading/Heading';

import styles from './Favorite.module.scss';

const Favorite: FC = () => {
	return (
		<Layout>
			<Helmet title='Избранное' />
			<div className={styles.favorite}>
				<Heading title='Избранное' backLink />
			</div>
		</Layout>
	);
};

export default Favorite;
