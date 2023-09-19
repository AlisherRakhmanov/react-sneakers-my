import Cookies from 'js-cookie';

import { IAuthResponse, IToken } from '../../store/user/user.interface';

export const saveTokensStorage = (data: IToken) => {
	Cookies.set('token', data.token);
};

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const removeTokensFromStorage = () => {
	Cookies.remove('token');
};
