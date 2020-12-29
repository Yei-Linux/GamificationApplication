import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
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
