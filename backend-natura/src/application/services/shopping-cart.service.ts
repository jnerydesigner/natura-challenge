import {
  DeleteItemCartDTO,
  UpdatedCartDTO,
} from '@application/dtos/create-cart.dto';
import { ProductEntity } from '@domain/entities/product.entity';
import { ShoppingCartEntity } from '@domain/entities/shopping_cart.entity';
import { ShoppingCartItemsEntity } from '@domain/entities/shopping_cart_items.entity';
import { AppDataSource } from '@infra/database/data-source';
import { NotFoundException } from '@infra/exceptions/not-found.exception';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingCartService {
  private queryRunner = AppDataSource.createQueryRunner();
  constructor(
    @InjectRepository(ShoppingCartEntity)
    private readonly shoopingCartRepository: Repository<ShoppingCartEntity>,
    @InjectRepository(ShoppingCartItemsEntity)
    private readonly shoppingCartItemsRepository: Repository<ShoppingCartItemsEntity>,
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createCart(userId: string, productId: string): Promise<any> {
    const queryRunner = AppDataSource.createQueryRunner();
    const cart = ShoppingCartEntity.createCart(userId);

    const cartCreate = this.shoopingCartRepository.create(cart);

    const findProduct = await this.productRepository.findOne({
      where: {
        productId,
      },
    });

    if (!findProduct) {
      throw new NotFoundException('Product not found');
    }

    const cartItem = ShoppingCartItemsEntity.createCartItem(
      1,
      findProduct.price,
      findProduct,
      cartCreate,
    );

    await queryRunner.connect();

    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(cartCreate);
      await queryRunner.manager.save(cartItem);

      await queryRunner.commitTransaction();

      const cartFinally = await this.shoopingCartRepository.find({
        where: {
          userId,
          cartId: cartCreate.cartId,
        },
        relations: {
          cartItems: {
            product: true,
          },
        },
      });

      return cartFinally;
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async updatedCart(cart: UpdatedCartDTO) {
    let cartExists = await this.cartExists(cart.userId, cart.cartId);

    if (!cartExists) {
      throw new NotFoundException('Cart not found');
    }

    const productExists = await this.productRepository.findOne({
      where: {
        productId: cart.productId,
      },
    });

    if (!productExists) {
      throw new NotFoundException('Product not found');
    }

    const cartItemExists = await this.cartItemExists(
      cart.cartId,
      cart.productId,
    );

    if (cartItemExists) {
      cartItemExists.quantity = cartItemExists.quantity + cart.quantity;
      cartItemExists.price = productExists.price * cartItemExists.quantity;
      await this.shoppingCartItemsRepository.save(cartItemExists);
    } else {
      const cartItem = ShoppingCartItemsEntity.createCartItem(
        1,
        productExists.price,
        productExists,
        cartExists,
      );

      await this.shoppingCartItemsRepository.save(cartItem);
    }

    cartExists = await this.cartExists(cart.userId, cart.cartId);

    const general = {
      ...cartExists,
      total: cartExists.cartItems
        .map((item) => {
          const price = Number(item.price);
          return price;
        })
        .reduce((acc, b) => acc + b, 0),
    };

    return general;
  }

  async deleteProductCart(cart: DeleteItemCartDTO): Promise<any> {
    let cartExists = await this.cartExists(cart.userId, cart.cartId);

    if (!cartExists) {
      throw new NotFoundException('Cart not found');
    }

    if (cartExists.cartItems.length === 1) {
      cartExists.cartItems.map((item) => {
        if (item.cartItemId === cart.cartItemId) {
          this.shoppingCartItemsRepository.delete(item.cartItemId);
        }
      });

      this.shoopingCartRepository.delete(cart.cartId);

      throw new NotFoundException('Cart not found');
    }

    cartExists.cartItems.map((item) => {
      if (item.cartItemId === cart.cartItemId) {
        this.shoppingCartItemsRepository.delete(item.cartItemId);
      }
    });

    return cartExists;
  }

  async findAll() {
    const cart = await this.shoopingCartRepository.find({
      relations: {
        cartItems: {
          product: true,
        },
      },
    });

    return cart;
  }

  async addItemCart(cart: UpdatedCartDTO) {
    let cartExists = await this.cartExists(cart.userId, cart.cartId);

    if (!cartExists) {
      throw new NotFoundException('Cart not found');
    }

    const productExists = await this.productRepository.findOne({
      where: {
        productId: cart.productId,
      },
    });

    if (!productExists) {
      throw new NotFoundException('Product not found');
    }

    const cartItemExists = await this.cartItemExists(
      cart.cartId,
      cart.productId,
    );

    if (cartItemExists) {
      cartItemExists.quantity = cartItemExists.quantity + 1;
      cartItemExists.price = productExists.price * cartItemExists.quantity;
      await this.shoppingCartItemsRepository.save(cartItemExists);
    } else {
      const cartItem = ShoppingCartItemsEntity.createCartItem(
        1,
        productExists.price,
        productExists,
        cartExists,
      );

      await this.shoppingCartItemsRepository.save(cartItem);
    }

    cartExists = await this.cartExists(cart.userId, cart.cartId);

    const general = {
      ...cartExists,
      total: cartExists.cartItems
        .map((item) => {
          const price = Number(item.price);
          return price;
        })
        .reduce((acc, b) => acc + b, 0),
    };

    return general;
  }

  async removeItemCart(cart: UpdatedCartDTO) {
    let cartExists = await this.cartExists(cart.userId, cart.cartId);

    if (!cartExists) {
      throw new NotFoundException('Cart not found');
    }

    const productExists = await this.productRepository.findOne({
      where: {
        productId: cart.productId,
      },
    });

    if (!productExists) {
      throw new NotFoundException('Product not found');
    }

    const cartItemExists = await this.cartItemExists(
      cart.cartId,
      cart.productId,
    );

    if (cartItemExists) {
      cartItemExists.quantity = cartItemExists.quantity - 1;
      if (cartItemExists.quantity === 0) {
        await this.shoppingCartItemsRepository.delete(
          cartItemExists.cartItemId,
        );
        cartExists = await this.cartExists(cart.userId, cart.cartId);
        return cartExists;
      }

      cartItemExists.price = productExists.price * cartItemExists.quantity;
      await this.shoppingCartItemsRepository.save(cartItemExists);
    } else {
      const cartItem = ShoppingCartItemsEntity.createCartItem(
        1,
        productExists.price,
        productExists,
        cartExists,
      );

      await this.shoppingCartItemsRepository.save(cartItem);
    }

    cartExists = await this.cartExists(cart.userId, cart.cartId);

    const general = {
      ...cartExists,
      total: cartExists.cartItems
        .map((item) => {
          const price = Number(item.price);
          return price;
        })
        .reduce((acc, b) => acc + b, 0),
    };

    return general;
  }

  private async cartExists(userId: string, cartId: string) {
    const cartExists = await this.shoopingCartRepository.findOne({
      where: {
        userId: userId,
        cartId: cartId,
      },
      relations: {
        cartItems: {
          product: true,
        },
      },
    });

    if (!cartExists) {
      throw new NotFoundException('Cart not found');
    }

    return cartExists;
  }

  private async cartItemExists(cartId: string, productId: string) {
    const cartItemExists = await this.shoppingCartItemsRepository.findOne({
      where: {
        shoppingCart: {
          cartId: cartId,
        },
        product: {
          productId: productId,
        },
      },
      relations: {
        shoppingCart: true,
        product: true,
      },
    });

    return cartItemExists;
  }

  findAllCartItems() {
    return this.shoppingCartItemsRepository.find({
      relations: {
        product: true,
        shoppingCart: true,
      },
    });
  }

  async findCart(cartId: string) {
    const cart = await this.shoopingCartRepository.findOne({
      where: {
        cartId,
      },
      relations: {
        cartItems: {
          product: {
            productImage: true,
          },
        },
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    return cart;
  }

  async getTotalItens(cartId: string) {
    const cart = await this.shoopingCartRepository.findOne({
      where: {
        cartId,
      },
      relations: {
        cartItems: {
          product: true,
        },
      },
    });

    if (!cart) {
      throw new NotFoundException('Cart not found');
    }

    const totalItens = cart.cartItems.length;

    return totalItens;
  }

  async removeOneItemCart(itemCartId: string) {
    const itemCart = await this.shoppingCartItemsRepository.findOne({
      where: {
        cartItemId: itemCartId,
      },
    });

    if (!itemCart) {
      throw new NotFoundException('Item not found');
    }

    await this.shoppingCartItemsRepository.delete(itemCartId);
  }
}
