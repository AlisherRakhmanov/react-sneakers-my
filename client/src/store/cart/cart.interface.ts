import { ICartItem } from '../../types/cart.types';

export interface IInitialStateCart {
	items: ICartItem[];
}

export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}
