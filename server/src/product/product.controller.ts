import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	getAll(@Query('searchTerm') searchTerm?: string) {
		return this.productService.getAll(searchTerm);
	}

	@Get('by-slug/:slug')
	getSlug(@Param('slug') slug: string) {
		return this.productService.bySlug(slug);
	}

	//Admin Place
	@Get('by-id/:_id')
	@Auth('admin')
	getProduct(@Param('_id') _id: string) {
		return this.productService.byId(_id);
	}

	@UsePipes(new ValidationPipe())
	@Post('create')
	@Auth('admin')
	create(@Body() dto: CreateProductDto) {
		return this.productService.create(dto);
	}

	@UsePipes(new ValidationPipe())
	@Patch('update/:_id')
	@Auth('admin')
	update(@Body() dto: UpdateProductDto, @Param('_id') _id: string) {
		return this.productService.update(dto, _id);
	}

	@Delete('delete/:_id')
	@Auth('admin')
	delete(@Param('_id') _id: string) {
		return this.productService.delete(_id);
	}
}
