import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
  } from '@nestjs/common';
  import { DatabaseModule } from '../../core/database/database.module';
  import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { StudyMethodsProvider } from './Infraestructure/Persistence/provider/studyMethods.provider';

  @Module({
    imports: [DatabaseModule],
    providers: [...StudyMethodsProvider],
    exports: [...StudyMethodsProvider],
  })
  export class StudyMethodsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('studymethods');
    }
  }
