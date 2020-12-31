import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../core/database/database.module';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
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
