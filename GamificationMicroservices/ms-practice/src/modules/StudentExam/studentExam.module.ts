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
import { InsertStudentAnswerByExam } from './Application/InsertStudentAnswersByExam';
import { PostgressStudentExamRepository } from './Infraestructure/PostgressStudentExamRepository';
import { StudentExamProvider } from './Infraestructure/provider/studentExam.provider';
@Module({
  imports: [DatabaseModule,SharedModule],
  controllers: [],
  providers: [InsertStudentAnswerByExam,PostgressStudentExamRepository,...StudentExamProvider],
  exports: [InsertStudentAnswerByExam,PostgressStudentExamRepository,...StudentExamProvider],
})
export class StudentExamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('studentexam');
  }
}
