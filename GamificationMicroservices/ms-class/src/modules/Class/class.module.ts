import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
  } from '@nestjs/common';
  import { DatabaseModule } from '../../core/database/database.module';
import { ClassController } from '../../backend/controllers/Class/ClassController';
  import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { SharedModule } from '../../shared/shared.module';
import { GetClassByFiltersService } from './Application/GetClassByFilters';
import { GetClassService } from './Application/GetClassById';
import { PostgressClassRepository } from './Infraestructure/Persistence/PostgressClassRepository';
import { ClassProvider } from './Infraestructure/Persistence/provider/class.provider';

  @Module({
    imports: [DatabaseModule,SharedModule],
    controllers: [ClassController],
    providers: [GetClassService,GetClassByFiltersService,PostgressClassRepository,...ClassProvider],
    exports: [GetClassService,GetClassByFiltersService,PostgressClassRepository,...ClassProvider],
  })
  export class ClassModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddleware).forRoutes('classes');
    }
  }
