import { ImageProductTypeormDto } from '@application/dtos/product-typeorm.dto';
import { ImageProductService } from '@application/services/image-product.service';
import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('image')
@ApiTags('ImageProduct')
export class ImageProductController {
  constructor(private readonly imageProductService: ImageProductService) {}

  @Post('product/:productId')
  @ApiOperation({ summary: 'Create image product' })
  createImageProduct(
    @Param('productId') productId: string,
    @Body() input: ImageProductTypeormDto,
  ) {
    return this.imageProductService.create(productId, input);
  }
}
