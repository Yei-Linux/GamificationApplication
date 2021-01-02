import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { rabbitmq } from './config/messages';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const microservice = app.connectMicroservice(rabbitmq);
  await app.enableCors();
  await app.startAllMicroservicesAsync();
  await app.listen(3002);
}
bootstrap();

export { bootstrap } ;
