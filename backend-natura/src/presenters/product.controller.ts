import { ProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ProductService } from '@application/services/product.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class productController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  create(@Body() input: ProductTypeormDto) {
    return this.productService.create(input);
  }
}
