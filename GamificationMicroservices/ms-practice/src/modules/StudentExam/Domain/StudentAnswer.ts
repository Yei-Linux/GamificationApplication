import ExamQuestionId from "../../Exam/Domain/ExamQuestionId";
import OptionId from "../../Option/Domain/OptionId";
import StudentAnswerDuration from "./StudentAnswerDuration";
import StudentAnswerId from "./StudentAnswerId";
import StudentAnswerText from "./StudentAnswerText";
import StudentExamId from "./StudentExamId";

export class StudentAnswer {
    constructor(
      private id: StudentAnswerId,
      private answerText: StudentAnswerText,
      private duration: StudentAnswerDuration,
      private questionExamId: ExamQuestionId,
      private optionId: OptionId,
      private studentExamId: StudentExamId
    ) {}

    get _id(): StudentAnswerId {
      return this.id;
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

    get _studentExamId() : StudentExamId {
      return this.studentExamId;
    }

    set _studentExamIdSetter(studentExamId : StudentExamId) {
      this.studentExamId = studentExamId;
    }

    public static create(
        id: StudentAnswerId,
        answerText: StudentAnswerText,
        duration: StudentAnswerDuration,
        questionExamId: ExamQuestionId,
        optionId: OptionId,
        studentExamId: StudentExamId
    ): StudentAnswer {
      let studentAnswerId = new StudentAnswer(id, answerText,duration,questionExamId,optionId,studentExamId);
      return studentAnswerId;
    }
  }
