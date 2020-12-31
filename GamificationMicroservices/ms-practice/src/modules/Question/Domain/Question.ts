import {Option} from "../../Option/Domain/Option";
import QuestionDescription from "./QuestionDescription";
import QuestionDifficulty from "./QuestionDifficulty";
import QuestionDuration from "./QuestionDuration";
import QuestionId from "./QuestionId";
import QuestionOrder from "./QuestionOrder";
import QuestionPoint from "./QuestionPoint";
import QuestionText from "./QuestionText";
import QuestionTypeId from "./QuestionTypeId";
import QuestionTypeName from "./QuestionTypeName";

export class Question {
    constructor(
      private id: QuestionId,
      private text: QuestionText,
      private description: QuestionDescription,
      private duration: QuestionDuration,
      private order: QuestionOrder,
      private points: QuestionPoint,
      private difficulty: QuestionDifficulty,
      private questionTypeId: QuestionTypeId,
      private questionTypeName: QuestionTypeName,
      private options: Option[]
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

    get _questionTypeName() : QuestionTypeName {
      return this.questionTypeName;
    }

    get _order() : QuestionOrder {
      return this.order;
    }

    get _difficulty() : QuestionDifficulty {
      return this.difficulty;
    }

    get _options() : Option[] {
      return this.options;
    }

    public static create(
      id: QuestionId,
      text: QuestionText,
      description: QuestionDescription,
      duration: QuestionDuration,
      points: QuestionPoint,
      questionTypeId: QuestionTypeId,
      questionTypeName: QuestionTypeName,
      questionOrder: QuestionOrder,
      questionDifficulty: QuestionDifficulty,
      options: Option[]
    ): Question {
      let question = new Question(id, text, description,duration,questionOrder,points,questionDifficulty,questionTypeId,questionTypeName,options);
      return question;
    }
  }
