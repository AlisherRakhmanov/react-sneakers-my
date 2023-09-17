import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: User,
				schemaOptions: {
					collection: 'User'
				}
			}
		])
	],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule {}
