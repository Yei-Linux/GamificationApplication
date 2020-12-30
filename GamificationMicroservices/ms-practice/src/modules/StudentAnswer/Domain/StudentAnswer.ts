import ExamQuestionId from "src/modules/Exam/Domain/ExamQuestionId";
import OptionId from "src/modules/Option/Domain/OptionId";
import StudentAnswerDuration from "./StudentAnswerDuration";
import StudentAnswerEmail from "./StudentAnswerEmail";
import StudentAnswerId from "./StudentAnswerId";
import StudentAnswerText from "./StudentAnswerText";

export class StudentAnswer {
    constructor(
      private id: StudentAnswerId,
      private email: StudentAnswerEmail,
      private answerText: StudentAnswerText,
      private duration: StudentAnswerDuration,
      private questionExamId: ExamQuestionId,
      private optionId: OptionId,
    ) {}

    get _id(): StudentAnswerId {
      return this.id;
    }

    get _email(): StudentAnswerEmail {
      return this.email;
    }

    get _answerText(): StudentAnswerText {
      return this.answerText;
    }

    get _duration() : StudentAnswerDuration {
        return this.duration;
    }

    get _questionExamId() : ExamQuestionId {
        return this.questionExamId;
    }

    get _optionId() : OptionId {
        return this.optionId;
    }

    public static create(
        id: StudentAnswerId,
        email: StudentAnswerEmail,
        answerText: StudentAnswerText,
        duration: StudentAnswerDuration,
        questionExamId: ExamQuestionId,
        optionId: OptionId,
    ): StudentAnswer {
      let studentAnswerId = new StudentAnswer(id, email, answerText,duration,questionExamId,optionId);
      return studentAnswerId;
    }
  }
