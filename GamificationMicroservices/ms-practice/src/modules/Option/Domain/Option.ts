import OptionId from "./OptionId";
import OptionText from "./OptionText";

export class Option {
    constructor(
      private id: OptionId,
      private text: OptionText,
      private isAnswer: boolean,
      private question: any
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

    get _question() : any {
        return this.question;
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
