import { useQuery } from 'react-query';

import { UserService } from '../../../services/user.service';

export const useFavorite = () => {
	const {
		data: favorites,
		isLoading,
		refetch
	} = useQuery('get user favorites', () => UserService.getFavorites(), {
		select: ({ data }) => data
	});

	return {
		favorites,
		isLoading,
		refetch
	};
};
