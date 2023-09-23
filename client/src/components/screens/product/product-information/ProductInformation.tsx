import { FC } from 'react';

import { useActions } from '../../../../hooks/useActions';
import { useCart } from '../../../../hooks/useCart';
import { IProduct } from '../../../../types/product.types';
import { priceToCurrency } from '../../../../utils/priceToCurrency';
import Button from '../../../ui/button/Button';

import styles from './ProductInformation.module.scss';

interface IProductInformation {
	product: IProduct;
}

const ProductInformation: FC<IProductInformation> = ({ product }) => {
	const { addToCart } = useActions();
	const { cart } = useCart();
	const isExistInCart = cart.some(item => item.product._id === product._id);

	return (
		<div className={styles.information}>
			<h1>{product.title}</h1>
			<p>{priceToCurrency(product.price)}</p>
			<Button
				className={styles.button}
				onClick={() => addToCart({ product, quantity: 1, id: product._id })}
			>
				{isExistInCart ? 'Уже в корзине' : 'В корзину'}
			</Button>
		</div>
	);
};

export default ProductInformation;
