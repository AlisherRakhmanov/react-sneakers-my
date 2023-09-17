import { Ref, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Product } from 'src/product/models/product.model';

export interface User extends Base {}

export class User extends TimeStamps {
	@prop({ unique: true })
	email: string;

	@prop()
	password: string;

	@prop({ default: false })
	isAdmin: boolean;

	@prop({ ref: () => Product })
	favorites?: Ref<Product>[];
}
