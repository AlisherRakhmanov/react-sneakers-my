import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
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
