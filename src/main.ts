import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT') || 3000;

  const options = new DocumentBuilder()
    .setTitle('Task Management App')
    .setDescription('simple and small task management system ')
    .setVersion('1.0')
    .addTag('users')
    .addTag('auth')
    .addTag('tasks')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // Start the app
  await app.listen(PORT);
}
bootstrap();
