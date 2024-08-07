import { Public } from '@application/decorators/public-request.decorator';
import { ProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ProductService } from '@application/services/product.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('Product')
export class productController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @Public()
  @ApiOperation({ summary: 'List all products' })
  findAll(@Query('page') page: number, @Query('limit') limit: number) {
    console.log(page, limit);
    return this.productService.findAll(+page, +limit);
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  create(@Body() input: ProductTypeormDto) {
    return this.productService.create(input);
  }

  @ApiOperation({ summary: 'Generate rating' })
  @Get('generate-rating')
  generateRating() {
    return this.productService.generateRating();
  }

  @Get('/one/:productId')
  @ApiOperation({ summary: 'Find one product' })
  @Public()
  findOne(@Param('productId') productId: string) {
    return this.productService.findOne(productId);
  }
}
