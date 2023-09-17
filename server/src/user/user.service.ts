import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './models/user.model';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User)
		private readonly User: ModelType<User>
	) {}

	async byId(_id: string) {
		const doc = await this.User.findById(_id)
			.select('-__v -password -updatedAt')
			.exec();

		if (!doc) throw new NotFoundException('User not found');

		return doc;
	}

	async toggleFavorite(productId: Types.ObjectId, user: User) {
		const { _id, favorites } = user;

		await this.User.findByIdAndUpdate(_id, {
			favorites: favorites.includes(productId)
				? favorites.filter(id => String(id) !== String(productId))
				: [...favorites, productId]
		});
	}

	async getFavoriteProduct(_id: string) {
		return await this.User.findById(_id, 'favorites')
			.populate('favorites')
			.exec()
			.then(data => data.favorites);
	}
}
