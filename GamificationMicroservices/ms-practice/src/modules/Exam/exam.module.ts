import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { ExamController } from 'src/endpoints/Exams/ExamController';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { GetExamService } from './Application/GetExam';
import { PostgressExamRepository } from './Infraestructure/Persistence/PostgressExamRepository';
import { ExamProvider } from './Infraestructure/Persistence/provider/exam.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ExamController],
  providers: [GetExamService,PostgressExamRepository,...ExamProvider],
  exports: [...ExamProvider],
})
export class ExamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('exam');
  }
}
