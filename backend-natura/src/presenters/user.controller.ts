import { Public } from '@application/decorators/public-request.decorator';
import { UserRequerstDTO } from '@application/dtos/user-request.dto';
import { UserService } from '@application/services/user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @Public()
  @ApiOperation({ summary: 'Create user' })
  async createUser(@Body() body: UserRequerstDTO) {
    return this.userService.createUser(body);
  }

  @ApiOperation({ summary: 'List all users' })
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
