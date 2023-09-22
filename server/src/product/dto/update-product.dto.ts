import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
	@IsString()
	title: string;

	@IsString()
	slug: string;

	@IsNumber()
	price: string;

	@IsArray()
	@IsString({ each: true })
	images: string[];
}
