import { Dispatch, FC, SetStateAction } from 'react';

import { useActions } from '../../../../../hooks/useActions';

import styles from './ProfileButtons.module.scss';

const ProfileButtons: FC<{
	setIsShow: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsShow }) => {
	const { logout } = useActions();

	const handleClick = () => {
		logout();
		setIsShow(false);
	};

	return (
		<div className={styles.buttons}>
			<button className={styles.button} onClick={handleClick}>
				Выйти
			</button>
		</div>
	);
};

export default ProfileButtons;
