import { IProduct } from '../../../types/product.types';

export interface ISlide
	extends Pick<IProduct, '_id' | 'images' | 'title' | 'slug'> {}
