import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { ExamController } from '../../endpoints/Exams/ExamController';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { SharedModule } from '../../shared/shared.module';
import { GetExamService } from './Application/GetExam';
import { PostgressExamRepository } from './Infraestructure/Persistence/PostgressExamRepository';
import { ExamProvider } from './Infraestructure/Persistence/provider/exam.provider';
import { ExamModel } from './Infraestructure/Persistence/sequelize/ExamModel';

@Module({
  imports: [DatabaseModule,SharedModule],
  controllers: [ExamController],
  providers: [GetExamService,PostgressExamRepository,...ExamProvider],
  exports: [...ExamProvider],
})
export class ExamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('exam');
  }
}
