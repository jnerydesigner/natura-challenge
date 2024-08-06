import {
  CreateCartDTO,
  DeleteItemCartDTO,
  UpdatedCartDTO,
} from '@application/dtos/create-cart.dto';
import { ShoppingCartService } from '@application/services/shopping-cart.service';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @Post()
  async createCart(@Body() cart: CreateCartDTO) {
    return this.shoppingCartService.createCart(cart.userId, cart.productId);
  }

  @Get()
  async getCarts() {
    return this.shoppingCartService.findAll();
  }

  @Patch()
  async updateCart(@Body() cart: UpdatedCartDTO) {
    return this.shoppingCartService.updatedCart(cart);
  }

  @Delete()
  async deleteItemCart(@Body() cart: DeleteItemCartDTO) {
    return this.shoppingCartService.deleteProductCart(cart);
  }

  @Patch('/add-item')
  async addItemCart(@Body() cart: UpdatedCartDTO) {
    return this.shoppingCartService.addItemCart(cart);
  }

  @Patch('/remove-item')
  async removeItemCart(@Body() cart: UpdatedCartDTO) {
    return this.shoppingCartService.removeItemCart(cart);
  }

  @Get('/total')
  async getTotalCart() {
    return this.shoppingCartService.findAllCartItems();
  }
}
