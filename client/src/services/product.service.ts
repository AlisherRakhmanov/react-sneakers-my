import axios, { axiosClassic } from '../api/interceptors';
import { getProductsApi } from '../config/api.config';
import { IProduct } from '../types/product.types';

export const ProductService = {
	async getAll(searchTerm?: string) {
		return await axiosClassic.get<IProduct[]>(getProductsApi(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		});
	},
	getBySlug(slug: string | undefined) {
		return axios.get<IProduct>(getProductsApi(`by-slug/${slug}`));
	}
};
