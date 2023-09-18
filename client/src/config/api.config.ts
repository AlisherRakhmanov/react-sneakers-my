export const API_URL = 'http://localhost:8000/api';

export const getProductsApi = (string: string) =>
	`http://localhost:8000/api/product/${string}`;

export const getAuthApi = (string: string) =>
	`http://localhost:8000/api/auth/${string}`;

export const getUserApi = (string: string) =>
	`http://localhost:8000/api/user/${string}`;
