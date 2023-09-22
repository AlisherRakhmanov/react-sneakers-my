import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface Product extends Base {}

export class Product extends TimeStamps {
	@prop()
	title: string;

	@prop({ unique: true })
	slug: string;

	@prop()
	price: number;

	@prop()
	images: string[];
}
