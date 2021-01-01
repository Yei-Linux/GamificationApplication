import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { ThemeProvider } from './Infraestructure/provider/theme.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...ThemeProvider],
  exports: [...ThemeProvider],
})
export class ThemeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('theme');
  }
}
