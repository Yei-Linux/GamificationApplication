import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rabbitmq } from './config/messages';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors();
  await app.listen(3001);
}
bootstrap();

export { bootstrap } ;
