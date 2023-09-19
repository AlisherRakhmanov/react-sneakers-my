import { axiosClassic } from '../../api/interceptors';
import { getAuthApi } from '../../config/api.config';
import { IAuthResponse } from '../../store/user/user.interface';

import { removeTokensFromStorage, saveToStorage } from './auth.helper';

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthApi('register'),
			{
				email,
				password
			}
		);

		if (response.data.token) saveToStorage(response.data);

		return response;
	},

	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthApi('login'),
			{
				email,
				password
			}
		);

		if (response.data.token) saveToStorage(response.data);

		return response;
	},

	logout() {
		removeTokensFromStorage();
		localStorage.removeItem('user');
	}
};
