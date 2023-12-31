import {
	CanActivate,
	ExecutionContext,
	ForbiddenException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from 'src/user/models/user.model';

export class OnlyAdmin implements CanActivate {
	constructor(private readonly reflector: Reflector) {}

	canActivate(ctx: ExecutionContext): boolean {
		const request = ctx.switchToHttp().getRequest<{ user: User }>();

		const user = request.user;

		if (!user.isAdmin) throw new ForbiddenException('You have no rights');

		return user.isAdmin;
	}
}
