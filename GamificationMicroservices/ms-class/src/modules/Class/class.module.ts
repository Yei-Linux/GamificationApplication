import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
  } from '@nestjs/common';
  import { DatabaseModule } from '../../core/database/database.module';
  import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { ClassProvider } from './Infraestructure/Persistence/provider/class.provider';

  @Module({
    imports: [DatabaseModule],
    providers: [...ClassProvider],
    exports: [...ClassProvider],
  })
  export class ClassModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('class');
    }
  }
