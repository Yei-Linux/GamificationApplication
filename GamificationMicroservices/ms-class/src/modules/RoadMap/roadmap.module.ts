import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { RoadMapController } from '../../backend/controllers/RoadMap/RoadMapController';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { SharedModule } from '../../shared/shared.module';
import { ClassModule } from '../Class/class.module';
import { GetRoadMapService } from './Application/GetRoadMap';
import { InsertStudentRoadMap } from './Application/InsertStudentRoadMap';
import { PostgressRoadMapRepository } from './Infraestructure/Persistence/PostgressRoadMapRepository';
import { RoadMapProvider } from './Infraestructure/Persistence/provider/roadMap.provider';

@Module({
  imports: [DatabaseModule,SharedModule,ClassModule],
  controllers: [RoadMapController],
  providers: [GetRoadMapService,InsertStudentRoadMap,PostgressRoadMapRepository,...RoadMapProvider],
  exports: [GetRoadMapService,InsertStudentRoadMap,PostgressRoadMapRepository,...RoadMapProvider],
})
export class RoadMapModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('studentroadmap');
  }
}
