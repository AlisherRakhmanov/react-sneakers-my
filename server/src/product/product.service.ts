import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './models/product.model';

@Injectable()
export class ProductService {
	constructor(
		@InjectModel(Product)
		private readonly Product: ModelType<Product>
	) {}

	async bySlug(slug: string) {
		const doc = await this.Product.findOne({ slug })
			.select('-__v -updatedAt')
			.exec();

		if (!doc) throw new NotFoundException('Product not found');

		return doc;
	}

	//Admin
	async getAll(searchTerm?: string) {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [
					{
						title: new RegExp(searchTerm, 'i')
					}
				]
			};
		}

		return await this.Product.find(options)
			.select('-__v -updatedAt')
			.sort({ createdAt: 'desc' })
			.exec();
	}

	async byId(_id: string) {
		const doc = await this.Product.findById(_id)
			.select('-__v -password -updatedAt')
			.exec();

		if (!doc) throw new NotFoundException('Product not found');

		return doc;
	}

	async create(dto: CreateProductDto) {
		return await this.Product.create({
			title: dto.title,
			slug: dto.slug,
			price: dto.price,
			images: dto.images
		});
	}

	async update(dto: UpdateProductDto, _id: string) {
		const doc = await this.byId(_id);

		return await this.Product.findByIdAndUpdate(doc._id, dto, {
			new: true
		});
	}

	async delete(_id: string) {
		const deleteDoc = await this.byId(_id);

		return await this.Product.findByIdAndDelete(deleteDoc._id);
	}
}
