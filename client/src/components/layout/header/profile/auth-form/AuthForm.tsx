import { FC } from 'react';
import { MdLogin } from 'react-icons/md';

import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
	return (
		<div className={styles.auth}>
			<button>
				<MdLogin size={25} />
			</button>
		</div>
	);
};

export default AuthForm;
