import { Controller, Get, Param, Put } from '@nestjs/common';
import { Types } from 'mongoose';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from './decorators/user.decorator';
import { User } from './models/user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	profile(@CurrentUser('_id') _id: string) {
		return this.userService.byId(_id);
	}

	@Get('favorites')
	@Auth()
	getFavorites(@CurrentUser('_id') _id: string) {
		return this.userService.getFavoriteProduct(_id);
	}

	@Put('favorites/:_id')
	@Auth()
	toggleFavorites(
		@Param('_id') _id: Types.ObjectId,
		@CurrentUser() user: User
	) {
		return this.userService.toggleFavorite(_id, user);
	}
}
