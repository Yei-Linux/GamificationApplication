import { AggregateRoot } from "../../../shared/domain/AggregateRoot";
import { DomainEvent } from "../../../shared/domain/event/DomainEvent";
import { StudentAnswer } from "./StudentAnswer";
import StudentExamEmail from "./StudentExamEmail";
import StudentExamId from "./StudentExamId";
import StudentExamRetry from "./StudentExamRetry";

export class StudentExam extends AggregateRoot{
    constructor(
      private id: StudentExamId,
      private email: StudentExamEmail,
      private retry: StudentExamRetry,
      private answers: StudentAnswer[]
    ) {
      super();
    }

    get _id(): StudentExamId {
      return this.id;
    }

    get _email(): StudentExamEmail {
      return this.email;
    }

    get _retry(): StudentExamRetry {
      return this.retry;
    }

    get _answers(): StudentAnswer[] {
        return this.answers;
    }

    public static create(
        id: StudentExamId,
        email: StudentExamEmail,
        retry: StudentExamRetry,
        answers: StudentAnswer[],
    ): StudentExam {
      let studentExam = new StudentExam(id, email, retry, answers);
      studentExam.record(DomainEvent.create("",{}));
      return studentExam;
    }
  }
