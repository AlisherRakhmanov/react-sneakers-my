import { useQuery } from 'react-query';

import { ProductService } from '../../../services/product.service';

export const useProducts = () => {
	return useQuery(['get products for catalog'], () => ProductService.getAll(), {
		select: ({ data }) => data
	});
};
