import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { SharedProvider } from './infraestructure/provider/shared.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...SharedProvider],
  exports: [...SharedProvider],
})
export class SharedModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('shared');
  }
}
