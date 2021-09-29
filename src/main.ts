import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { AllExceptionsFilter, GlobalPipes } from './core';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('v1');
  const l = new Logger('app');

  const config = new DocumentBuilder().setTitle('Todo list').setVersion('1.0').build();

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalPipes(new GlobalPipes());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8288);
  l.log(`app runs on PORT ${await app.getUrl()}, in [${process.env.MODE}] mode`);
}

bootstrap();
