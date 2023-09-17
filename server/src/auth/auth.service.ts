import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { hash, verify } from 'argon2';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'src/user/models/user.model';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User)
		private readonly User: ModelType<User>,
		private readonly jwtService: JwtService
	) {}

	async login(dto: CreateAuthDto) {
		const user = await this.validate(dto);

		return {
			user: this.userFields(user),
			token: await this.issueToken(String(user._id))
		};
	}

	async register(dto: CreateAuthDto) {
		const isExists = await this.User.findOne({ email: dto.email });

		if (isExists)
			throw new BadRequestException('User with email is already in use');

		const newUser = new this.User({
			email: dto.email,
			password: await hash(dto.password)
		});

		const user = await newUser.save();

		return {
			user: this.userFields(user),
			token: await this.issueToken(String(user._id))
		};
	}

	async validate(dto: CreateAuthDto) {
		const user = await this.User.findOne({ email: dto.email });

		if (!user) throw new BadRequestException('Email or password is incorrect');

		const isValidatePassword = await verify(user.password, dto.password);

		if (!isValidatePassword)
			throw new BadRequestException('Email or password is incorrect');

		return user;
	}

	async issueToken(userId: string) {
		const data = { _id: userId };

		return await this.jwtService.signAsync(data, {
			expiresIn: '31d'
		});
	}

	userFields(user: User) {
		return {
			_id: user._id,
			email: user.email
		};
	}
}
