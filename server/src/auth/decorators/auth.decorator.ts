import { UseGuards, applyDecorators } from '@nestjs/common';
import { TypeRole } from '../auth.interface';
import { OnlyAdmin } from '../guards/admin.guard';
import { JwtGuard } from '../guards/auth.guard';

export const Auth = (role: TypeRole = 'user') =>
	applyDecorators(
		role == 'admin' ? UseGuards(JwtGuard, OnlyAdmin) : UseGuards(JwtGuard)
	);
