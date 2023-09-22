import axios from 'axios';
import Cookies from 'js-cookie';

import { API_URL } from '../config/api.config';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

instance.interceptors.request.use(config => {
	const token = Cookies.get('token');
	if (config.headers && token) config.headers.Authorization = `Bearer ${token}`;

	return config;
});

export default instance;
