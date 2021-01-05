import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  HttpStatus,
  Res,
  Query,
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

  @Get("/findByFilter")
  async getExamByThemeId(
    @Query() getExamRequest: GetExamRequest,
    @Res() res: any,
  ) {
    try {
      let examResponse: GetExamResponse = await this.getExamService.handle(
        new ThemeId("73b34ecc-a367-42ef-bb66-1071da349fcb"),
        new ExamTypeId("9f8cd945-b262-427b-a81c-881f38801cc7"),
        new LevelId('0eea4bc2-cdd5-4617-a7c7-ab605fcd06d8'),
      );
      res.status(HttpStatus.OK).json({ data: examResponse });
    } catch (error) {
      Logger.log(`Error found: ${error}`);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: error });
    }
  }

  @Post('/answersStudent')
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
