import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
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
