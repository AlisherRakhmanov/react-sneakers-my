import { FC } from 'react';
import { MdOutlinePerson } from 'react-icons/md';

import { useAuth } from '../../../../hooks/useAuth';
import { useOutside } from '../../../../hooks/useOutside';

import styles from './ProfileMenu.module.scss';
import AuthForm from './auth-form/AuthForm';
import ProfileButtons from './profile-buttons/ProfileButtons';

const ProfileMenu: FC = () => {
	const { user } = useAuth();
	const { isShow, setIsShow, ref } = useOutside(false);

	return (
		<div className={styles.profile} ref={ref}>
			{user ? (
				<button onClick={() => setIsShow(!isShow)}>
					<MdOutlinePerson size={25} />
				</button>
			) : (
				<AuthForm />
			)}

			{isShow && <ProfileButtons setIsShow={setIsShow} />}
		</div>
	);
};

export default ProfileMenu;
