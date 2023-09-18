import { FC } from 'react';
import { MdOutlinePerson } from 'react-icons/md';

import { useAuth } from '../../../../hooks/useAuth';
import { useOutside } from '../../../../hooks/useOutside';

import styles from './Profile.module.scss';
import AuthForm from './auth-form/AuthForm';

const Profile: FC = () => {
	const { isAuth } = useAuth();
	const { isShow, setIsShow, ref } = useOutside(false);

	return (
		<div className={styles.profile} ref={ref}>
			{isAuth ? (
				<button onClick={() => setIsShow(!isShow)}>
					<MdOutlinePerson size={25} />
				</button>
			) : (
				<AuthForm />
			)}

			{isShow && <div>Show</div>}
		</div>
	);
};

export default Profile;
