import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamController } from './endpoints/Exams/ExamController';
import { ExamModule } from './modules/Exam/exam.module';
import { LevelModule } from './modules/Level/level.modules';
import { OptionModule } from './modules/Option/option.module';
import { QuestionModule } from './modules/Question/question.module';
import { StudentExamModule } from './modules/StudentExam/studentExam.module';
import { ThemeModule } from './modules/Theme/theme.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [ThemeModule,ExamModule,LevelModule,OptionModule,QuestionModule,StudentExamModule,SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
