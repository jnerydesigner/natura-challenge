import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
  });

  const configSwagger = new DocumentBuilder()
    .setTitle('Natura & Co API')
    .setDescription('Essa é api da Natura & CO')
    .setVersion('1.0')
    .addTag('natura')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);

  const config = new ConfigService();
  const PORT = config.get('SERVER_PORT');

  const logger = new Logger('Initial Application');

  await app.listen(PORT, () => {
    logger.log(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap();
