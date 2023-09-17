import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Product } from './models/product.model';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: Product,
				schemaOptions: {
					collection: 'Product'
				}
			}
		])
	],
	controllers: [ProductController],
	providers: [ProductService]
})
export class ProductModule {}
