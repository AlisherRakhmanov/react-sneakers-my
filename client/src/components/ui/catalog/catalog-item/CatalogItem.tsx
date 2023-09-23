import { FC } from 'react';
import { HiPlus } from 'react-icons/hi';
import { MdCheck } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { getProductsUrl } from '../../../../config/url.config';
import { useActions } from '../../../../hooks/useActions';
import { useCart } from '../../../../hooks/useCart';
import { IProduct } from '../../../../types/product.types';
import { priceToCurrency } from '../../../../utils/priceToCurrency';
import FavoriteButton from '../../../screens/favorite/favorite-button/FavoriteButton';

import styles from './CatalogItem.module.scss';

const CatalogItem: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart } = useActions();
	const { cart } = useCart();

	const isExistInCart = cart.some(item => item.product._id === product._id);

	const handleClickCart = () => {
		addToCart({ product: product, quantity: 1, id: product._id });
	};

	return (
		<div className={styles.item}>
			<FavoriteButton productId={product._id} />

			<Link to={getProductsUrl(product.slug)} relative='route'>
				<img
					src={product.images[0]}
					alt={product.title}
					width={150}
					height={150}
					draggable={false}
				/>
				<h3>{product.title}</h3>
			</Link>

			<div className={styles.info}>
				<div className={styles.price}>
					<p>Цена:</p>
					<b>{priceToCurrency(product.price)}</b>
				</div>

				<button className={styles.plus} onClick={handleClickCart}>
					{isExistInCart ? <MdCheck size={20} /> : <HiPlus size={20} />}
				</button>
			</div>
		</div>
	);
};

export default CatalogItem;
