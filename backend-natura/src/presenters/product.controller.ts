import { Public } from '@application/decorators/public-request.decorator';
import { ProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ProductService } from '@application/services/product.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('products')
export class productController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Public()
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.productService.findAll(+page, +limit);
  }

  @Post()
  create(@Body() input: ProductTypeormDto) {
    return this.productService.create(input);
  }

  @Get('generate-rating')
  generateRating() {
    return this.productService.generateRating();
  }
}
