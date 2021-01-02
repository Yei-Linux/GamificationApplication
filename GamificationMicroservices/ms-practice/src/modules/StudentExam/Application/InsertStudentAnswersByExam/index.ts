import { Injectable } from "@nestjs/common";
import { DomainEventPublisher, IDomainEventPublihser } from "../../../../shared/infraestructure/event/DomainEventPublisher";
import { StudentAnswer } from "../../Domain/StudentAnswer";
import { StudentExam } from "../../Domain/StudentExam";
import StudentExamId from "../../Domain/StudentExamId";
import { PostgressStudentExamRepository } from "../../Infraestructure/PostgressStudentExamRepository";

interface IInsertStudentAnswerByExam {
    handle(studentExam : StudentExam): Promise<void>;
  }

  @Injectable()
  export class InsertStudentAnswerByExam implements IInsertStudentAnswerByExam {
      constructor(private readonly studentExamRepository: PostgressStudentExamRepository,
        private readonly domainEventPublisher: DomainEventPublisher) {}

      async handle(studentExam: StudentExam): Promise<void> {
          try {
            let studentExamInserted : StudentExam = await this.studentExamRepository.insertStudentExamRepository(studentExam);
            for( let studenAnswer of studentExam._answers ) {
                studenAnswer._studentExamIdSetter = studentExamInserted._id;
                await this.studentExamRepository.insertStudentAnswersOfExamRepository(studenAnswer);
            }
            this.domainEventPublisher.publish(studentExamInserted.pullDomainEvents()[0]);
          } catch (error) {
             throw new Error(`Error Found: ${error}`);
          }
      }
  }