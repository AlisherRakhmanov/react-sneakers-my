import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';
import { getMongoDbConfig } from './config/mongodb.config';
import { MediaModule } from './media/media.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoDbConfig
		}),
		UserModule,
		AuthModule,
		MediaModule,
		ProductModule
	]
})
export class AppModule {}
