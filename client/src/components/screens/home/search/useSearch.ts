import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '../../../../hooks/useDebounce';
import { ProductService } from '../../../../services/product.service';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearch = useDebounce(searchTerm, 500);

	const { data, isSuccess } = useQuery(
		['search products', debouncedSearch],
		() => ProductService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch
		}
	);

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	return { handleSearch, data, searchTerm, isSuccess };
};
