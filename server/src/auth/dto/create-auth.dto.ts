import { IsEmail, MinLength } from 'class-validator';
export class CreateAuthDto {
	@IsEmail()
	email: string;

	@MinLength(8, { message: 'password must be at least 8 characters' })
	password: string;
}
