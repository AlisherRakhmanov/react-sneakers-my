import { IProduct } from './product.types';

export interface ICartItem {
	id: number;
	products: IProduct;
	quantity: number;
}
