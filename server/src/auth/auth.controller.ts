import {
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('login')
	login(@Body() dto: CreateAuthDto) {
		return this.authService.login(dto);
	}

	@UsePipes(new ValidationPipe())
	@Post('register')
	register(@Body() dto: CreateAuthDto) {
		return this.authService.register(dto);
	}
}
