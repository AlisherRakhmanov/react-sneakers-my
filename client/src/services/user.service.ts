import axios from '../api/interceptors';
import { getUserApi } from '../config/api.config';
import { IProduct } from '../types/product.types';

export const UserService = {
	async getFavorites() {
		return await axios.get<IProduct[]>(getUserApi('favorites'));
	},

	async toggleFavorite(productId: string) {
		return await axios.put(getUserApi(`favorites/${productId}`));
	}
};
