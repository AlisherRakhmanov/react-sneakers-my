import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdLogin } from 'react-icons/md';

import { useActions } from '../../../../../hooks/useActions';
import { useOutside } from '../../../../../hooks/useOutside';
import Button from '../../../../ui/button/Button';
import Field from '../../../../ui/field/Field';

import styles from './AuthForm.module.scss';
import { IAuthForm } from './auth-form.interface';

const AuthForm: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');
	const { ref, isShow, setIsShow } = useOutside(false);
	const {
		register: registerInput,
		handleSubmit,
		formState: { errors }
	} = useForm<IAuthForm>({ mode: 'onChange' });

	const { login, register } = useActions();

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);
	};

	return (
		<div className={styles.auth} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<MdLogin size={25} />
			</button>

			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...registerInput('email', { required: 'Email is required' })}
						placeholder='email'
						error={errors.email}
					/>

					<Field
						{...registerInput('password', { required: 'Password is required' })}
						placeholder='password'
						type='password'
						error={errors.password}
					/>

					<div className={styles.buttons}>
						<Button className='mt-3' onClick={() => setType('login')}>
							Войти
						</Button>
						<button
							className={styles.button}
							onClick={() => setType('register')}
						>
							Регистрация
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default AuthForm;
