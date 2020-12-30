import { Injectable, Inject } from '@nestjs/common';
import { PostgressExamRepository } from '../../Infraestructure/Persistence/PostgressExamRepository';

interface IGetExamService {
  handle(themeId): Promise<any>;
}

@Injectable()
export class GetExamService implements IGetExamService {
    constructor(private readonly getExamRepository: PostgressExamRepository) {}

  async handle(themeId: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
