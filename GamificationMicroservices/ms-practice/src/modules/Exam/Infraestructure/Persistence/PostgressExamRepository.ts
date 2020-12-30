import { Inject, Injectable } from '@nestjs/common';
import ThemeId from 'src/modules/Theme/Domain/ThemeId';
import { ExamRepository } from '../../Domain/ExamRepository';
import { ExamModel } from './sequelize/ExamModel';

@Injectable()
export class PostgressExamRepository implements ExamRepository {
  constructor(
    @Inject('ExamModel') private readonly examModel: typeof ExamModel,
  ) {}

  async getExamByTheme(themeId: ThemeId): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
