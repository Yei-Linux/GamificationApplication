import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { LevelProvider } from './Infraestructure/provider/leve.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...LevelProvider],
  exports: [...LevelProvider],
})
export class LevelModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('level');
  }
}
