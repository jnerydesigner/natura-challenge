import { formatNumberTwoDecimals } from '@infra/utils/format-number-two-decimals.util';

export class CartResponseMapper {
  static toResponse(cart: any): CartResponse {
    return {
      cartId: cart.cartId,
      userId: cart.userId,
      oldTotal: formatNumberTwoDecimals(
        cart.cartItems
          .map((cartItem) => Number(cartItem.price))
          .reduce((acc, curr) => acc + curr, 0),
      ),
      total: verifieldWithCoupon(
        cart.coupon,
        formatNumberTwoDecimals(
          cart.cartItems
            .map((cartItem) => Number(cartItem.price))
            .reduce((acc, curr) => acc + curr, 0),
        ),
      ),
      createdAt: cart.createdAt,
      updatedAt: cart.updatedAt,
      coupon: verifieldWithCouponExists(cart.coupon),
      cartItems: cart.cartItems.map((cartItem: any) => ({
        quantity: cartItem.quantity,
        product: cartItem.product,
        cartItemId: cartItem.cartItemId,
        price: cartItem.price,
        createdAt: cartItem.createdAt,
        updatedAt: cartItem.updatedAt,
      })),
    };
  }
}

const verifieldWithCouponExists = (coupon: Coupon | null | undefined) => {
  if (!coupon || coupon === null || coupon === undefined) {
    return {
      percentage: '0',
      value: '0',
      couponCode: '',
      expirationDate: '',
      couponId: '',
      type: '',
      createdAt: '',
      updatedAt: '',
    };
  }

  return coupon;
};

const verifieldWithCoupon = (
  coupon: Coupon | null | undefined,
  total: string,
): string => {
  let newTotal = total;

  if (coupon.type === 'percentage') {
    const couponValue = {
      percentage: coupon.percentage,
      expirationDate: coupon.expirationDate,
    };

    newTotal = formatNumberTwoDecimals(
      Number(total) - (Number(total) * Number(couponValue.percentage)) / 100,
    );
  } else {
    const couponValue = {
      value: coupon.value,
      expirationDate: coupon.expirationDate,
    };

    newTotal = formatNumberTwoDecimals(
      Number(total) - Number(couponValue.value),
    );
  }

  return newTotal;
};

type Product = {
  productId: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
};

type CartItem = {
  quantity: number;
  product: Product;
  cartItemId: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

type Coupon = {
  percentage: string;
  value: string;
  couponCode: string;
  expirationDate: string;
  couponId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

type CartResponse = {
  userId: string;
  cartId: string;
  createdAt: string;
  updatedAt: string;
  coupon: Coupon;
  total: string;
  oldTotal: string;
  cartItems: CartItem[];
};
