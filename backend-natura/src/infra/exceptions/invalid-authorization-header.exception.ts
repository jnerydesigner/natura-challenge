import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidAuthorizationHeaderException extends HttpException {
  constructor() {
    super('Invalid authorization header', HttpStatus.BAD_REQUEST);
  }
}
