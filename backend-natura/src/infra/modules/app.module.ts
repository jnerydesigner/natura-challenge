import { AppService } from '@application/services/app.service';
import { Module } from '@nestjs/common';
import { AppController } from '@presenters/app.controller';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
