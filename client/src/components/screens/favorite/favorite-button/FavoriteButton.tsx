import cn from 'clsx';
import { FC, useEffect, useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { useMutation } from 'react-query';

import { UserService } from '../../../../services/user.service';
import { toastError } from '../../../../utils/error';
import styles from '../../../ui/catalog/catalog-item/CatalogItem.module.scss';
import { useFavorite } from '../useFavorite';

import stylesActive from './FavoriteButton.module.scss';

const FavoriteButton: FC<{ productId: string }> = ({ productId }) => {
	const { isLoading, favorites, refetch } = useFavorite();
	const [isSmashed, setIsSmashed] = useState(false);

	useEffect(() => {
		if (favorites) {
			const isHasProduct = favorites.some(f => f._id === productId);
			if (isSmashed !== isHasProduct) setIsSmashed(isHasProduct);
		}
	}, [favorites, isSmashed, productId]);

	const { mutateAsync } = useMutation(
		'toggle favorites',
		() => UserService.toggleFavorite(productId),
		{
			onError(error) {
				toastError(error, 'Update favorite list');
			},
			onSuccess() {
				setIsSmashed(!isSmashed);
				refetch();
			}
		}
	);

	return (
		<button
			className={cn(styles.plus, styles.favorite, stylesActive.active, {
				[styles.active]: isSmashed
			})}
			onClick={() => mutateAsync()}
		>
			<MdFavorite size={20} />
		</button>
	);
};

export default FavoriteButton;
