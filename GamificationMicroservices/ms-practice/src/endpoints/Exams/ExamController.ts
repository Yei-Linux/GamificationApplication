import { Controller, Get, Post, Body } from '@nestjs/common';
import { GetExamService } from 'src/modules/Exam/Application/GetExam';
import { GetExamRequest } from './ExamRequest';

@Controller('exams')
export class ExamController {
  constructor(private readonly getExamService: GetExamService) {}

  @Post()
  async getExamByThemeId(@Body() getExamRequest: GetExamRequest) {
  }
}