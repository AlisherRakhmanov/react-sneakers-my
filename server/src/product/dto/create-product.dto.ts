import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
	@IsString()
	title: string;

	@IsString()
	slug: string;

	@IsNumber()
	price: string;

	@IsString()
	image: string;
}
