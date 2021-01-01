import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { StudentRoadMapProvider } from './Infraestructure/Persistence/provider/studentRoadMap.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...StudentRoadMapProvider],
  exports: [...StudentRoadMapProvider],
})
export class StudentRoadMapModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('studentroadmap');
  }
}
