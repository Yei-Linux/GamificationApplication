import { Injectable, Inject, Logger } from '@nestjs/common';
import LevelId from '../../../Level/Domain/LevelId';
import ThemeId from '../../../Theme/Domain/ThemeId';
import { Exam } from '../../Domain/Exam';
import ExamTypeId from '../../Domain/ExamTypeId';
import { PostgressExamRepository } from '../../Infraestructure/Persistence/PostgressExamRepository';
import { ExamMapper } from '../../Infraestructure/Persistence/sequelize/mapper/ExamMapper';
import { GetExamResponse } from './GetExamResponse';

interface IGetExamService {
  handle(themeId: string, examTypeId: string, levelId: string): Promise<GetExamResponse>;
}

@Injectable()
export class GetExamService implements IGetExamService {
    constructor(private readonly examRepository: PostgressExamRepository) {}

  async handle(themeId: string, examTypeId: string, levelId: string): Promise<GetExamResponse> {
    let examFound : Exam = await this.examRepository.getExamByTheme(new ThemeId(themeId),new ExamTypeId(examTypeId), new LevelId(levelId));
    return ExamMapper.convertExamToGetExamResponse(examFound);
  }
}
