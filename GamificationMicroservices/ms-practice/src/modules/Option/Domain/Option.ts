import QuestionId from "../../Question/Domain/QuestionId";
import OptionId from "./OptionId";
import OptionText from "./OptionText";

export class Option {
    constructor(
      private id: OptionId,
      private text: OptionText,
      private isAnswer: boolean,
      private questionId: QuestionId
    ) {}

    get _id(): OptionId {
      return this.id;
    }

    get _text(): OptionText {
      return this.text;
    }

    get _isAnswer(): boolean {
      return this.isAnswer;
    }

    get _questionId() : QuestionId {
        return this.questionId;
    }

    public static create(
      id: OptionId,
      name: OptionText,
      isAnswer: boolean,
      question: any
    ): Option {
      let option = new Option(id, name, isAnswer,question);
      return option;
    }
  }
