import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('API REST SEGUNDO PARCIAL')
  .setDescription('Backend de segundo parcial')
  .setVersion('1.0')
  .addTag('series')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('apidocumentation', app, document);

  await app.listen(process.env.PORT);
  console.log(`App running on ${await app.getUrl()}/apidocumentation`);
}
bootstrap();
