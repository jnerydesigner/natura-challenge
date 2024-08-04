import { ImageProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ImageProductService } from '@application/services/image-product.service';
import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('image')
export class ImageProductController {
  constructor(private readonly imageProductService: ImageProductService) {}

  @Post('product/:productId')
  createImageProduct(
    @Param('productId') productId: string,
    @Body() input: ImageProductTypeormDto,
  ) {
    return this.imageProductService.create(productId, input);
  }
}
