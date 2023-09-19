export const API_URL = 'http://localhost:8000/api';

export const getProductsApi = (string: string) =>
	`${API_URL}/product/${string}`;

export const getAuthApi = (string: string) => `${API_URL}/auth/${string}`;

export const getUserApi = (string: string) => `${API_URL}/user/${string}`;
