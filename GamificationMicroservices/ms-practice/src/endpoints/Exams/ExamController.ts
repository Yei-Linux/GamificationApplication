import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { GetExamService } from '../../modules/Exam/Application/GetExam';
import { GetExamResponse } from '../../modules/Exam/Application/GetExam/GetExamResponse';
import { Exam } from '../../modules/Exam/Domain/Exam';
import ExamTypeId from '../../modules/Exam/Domain/ExamTypeId';
import LevelId from '../../modules/Level/Domain/LevelId';
import { InsertStudentAnswerByExam } from '../../modules/StudentExam/Application/InsertStudentAnswersByExam';
import { StudentAnswersByExamMapper } from '../../modules/StudentExam/Infraestructure/sequelize/mapper/StudentAnswersByExamMapper';
import ThemeId from '../../modules/Theme/Domain/ThemeId';
import { GetExamRequest, PostStudentAnswersOfExamRequest } from './ExamRequest';

@Controller('exams')
export class ExamController {
  constructor(
    private readonly getExamService: GetExamService,
    private readonly insertStudentAnswerByExamService: InsertStudentAnswerByExam,
  ) {}

  @Post()
  async getExamByThemeId(
    @Body() getExamRequest: GetExamRequest,
    @Res() res: any,
  ) {
    try {
      let examResponse: GetExamResponse = await this.getExamService.handle(
        new ThemeId(getExamRequest.themeId),
        new ExamTypeId(getExamRequest.examTypeId),
        new LevelId(getExamRequest.levelId),
      );
      res.status(HttpStatus.OK).json({ data: examResponse });
    } catch (error) {
      Logger.log(`Error found: ${error}`);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: error });
    }
  }

  @Post('/answers')
  async insertStudentAnswersOfExam(
    @Body() postStudentAnswersOfExamRequest: PostStudentAnswersOfExamRequest,
    @Res() res: any,
  ) {
    try {
      await this.insertStudentAnswerByExamService.handle(StudentAnswersByExamMapper.convertPostStudentAnswersOfExamToStudentExam(postStudentAnswersOfExamRequest));
      res.status(HttpStatus.CREATED).json({ data: "Student Answers Inserted" });
    } catch (error) {
      Logger.log(`Error found: ${error}`);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: error });
    }
  }
}
