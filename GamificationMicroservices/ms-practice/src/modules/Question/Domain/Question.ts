import QuestionDescription from "./QuestionDescription";
import QuestionDuration from "./QuestionDuration";
import QuestionId from "./QuestionId";
import QuestionPoint from "./QuestionPoint";
import QuestionText from "./QuestionText";
import QuestionTypeId from "./QuestionTypeId";

export class Question {
    constructor(
      private id: QuestionId,
      private text: QuestionText,
      private description: QuestionDescription,
      private duration: QuestionDuration,
      private points: QuestionPoint,
      private questionTypeId: QuestionTypeId,
    ) {}

    get _id(): QuestionId {
      return this.id;
    }

    get _text(): QuestionText {
      return this.text;
    }

    get _description(): QuestionDescription {
      return this.description;
    }

    get _duration() : QuestionDuration {
        return this.duration;
    }

    get _points() : QuestionPoint {
        return this.points;
    }

    get _questionTypeId() : QuestionTypeId {
        return this.questionTypeId;
    }

    public static create(
      id: QuestionId,
      text: QuestionText,
      description: QuestionDescription,
      duration: QuestionDuration,
      points: QuestionPoint,
      questionTypeId: QuestionTypeId
    ): Question {
      let question = new Question(id, text, description,duration,points,questionTypeId);
      return question;
    }
  }
