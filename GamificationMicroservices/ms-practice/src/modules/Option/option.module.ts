import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { OptionProvider } from './Infraestructure/provider/option.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...OptionProvider],
  exports: [...OptionProvider],
})
export class OptionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('option');
  }
}
