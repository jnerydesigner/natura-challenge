import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_REQUEST = 'isPublic';

export const Public = () => SetMetadata(IS_PUBLIC_REQUEST, true);
