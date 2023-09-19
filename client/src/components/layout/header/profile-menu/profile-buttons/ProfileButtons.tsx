import { FC } from 'react';

import { useActions } from '../../../../../hooks/useActions';

import styles from './ProfileButtons.module.scss';

const ProfileButtons: FC = () => {
	const { logout } = useActions();
	return (
		<div className={styles.buttons}>
			<button className={styles.button} onClick={() => logout()}>
				Выйти
			</button>
		</div>
	);
};

export default ProfileButtons;
