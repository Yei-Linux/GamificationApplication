import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
  } from '@nestjs/common';
  import { DatabaseModule } from '../../core/database/database.module';
  import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { CourseProvider } from './Infraestructure/provider/course.provider';

  @Module({
    imports: [DatabaseModule],
    providers: [...CourseProvider],
    exports: [...CourseProvider],
  })
  export class CourseModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('course');
    }
  }
