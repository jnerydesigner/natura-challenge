import { Public } from '@application/decorators/public-request.decorator';
import { UserRequerstDTO } from '@application/dtos/user-request.dto';
import { UserService } from '@application/services/user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  async createUser(@Body() body: UserRequerstDTO) {
    return this.userService.createUser(body);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
