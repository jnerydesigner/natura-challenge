import { ProductService } from '@application/services/product.service';
import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class productController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
