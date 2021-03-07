import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { ExamController } from '../../endpoints/Exams/ExamController';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { SharedModule } from '../../shared/shared.module';
import { StudentExamModule } from '../StudentExam/studentExam.module';
import { GetExamService } from './Application/GetExam';
import { GetResultCompilerService } from './Application/GetResultCompiler';
import { PostgressExamRepository } from './Infraestructure/Persistence/PostgressExamRepository';
import { ExamProvider } from './Infraestructure/Persistence/provider/exam.provider';

@Module({
  imports: [DatabaseModule, SharedModule, StudentExamModule],
  controllers: [ExamController],
  providers: [
    GetExamService,
    GetResultCompilerService,
    PostgressExamRepository,
    ...ExamProvider,
  ],
  exports: [...ExamProvider],
})
export class ExamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('exam');
  }
}
