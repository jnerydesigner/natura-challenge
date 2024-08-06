import { ShoppingCartService } from '@application/service/shopping-cart.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingCartService],
    }).compile();

    service = module.get<ShoppingCartService>(ShoppingCartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
