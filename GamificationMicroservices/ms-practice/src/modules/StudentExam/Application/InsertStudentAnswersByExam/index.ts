import { Injectable } from "@nestjs/common";
import { StudentAnswer } from "../../Domain/StudentAnswer";
import { StudentExam } from "../../Domain/StudentExam";
import StudentExamId from "../../Domain/StudentExamId";
import { PostgressStudentExamRepository } from "../../Infraestructure/PostgressStudentExamRepository";

interface IInsertStudentAnswerByExam {
    handle(studentExam : StudentExam): Promise<void>;
  }

  @Injectable()
  export class InsertStudentAnswerByExam implements IInsertStudentAnswerByExam {
      constructor(private readonly studentExamRepository: PostgressStudentExamRepository) {}

      async handle(studentExam: StudentExam): Promise<void> {
          try {
            let studentExamInserted = await this.studentExamRepository.insertStudentExamRepository(studentExam);
            for( let studenAnswer of studentExam._answers ) {
                studenAnswer._studentExamIdSetter = studentExamInserted._id;
                await this.studentExamRepository.insertStudentAnswersOfExamRepository(studenAnswer);
            }
          } catch (error) {
             throw new Error(`Error Found: ${error}`);
          }
      }
  }