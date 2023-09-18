import { axiosClassic } from '../api/interceptors';
import { getProductsApi } from '../config/api.config';
import { IProduct } from '../types/product.types';

export const ProductService = {
	getAll(searchTerm?: string) {
		return axiosClassic.get<IProduct[]>(getProductsApi(''), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		});
	}
};
