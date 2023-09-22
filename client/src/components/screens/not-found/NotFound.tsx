import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.notFound}>
			<h1>404</h1>
			<p>This page not found</p>
			<button onClick={() => navigate('/')}>Назад</button>
		</div>
	);
};

export default NotFound;
