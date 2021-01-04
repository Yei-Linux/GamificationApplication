import { Level } from "../../Level/Domain/Level";
import { Question } from "../../Question/Domain/Question";
import { Theme } from "../../Theme/Domain/Theme";
import ExamDescription from "./ExamDescription";
import ExamDuration from "./ExamDuration";
import ExamId from "./ExamId";
import ExamName from "./ExamName";
import ExamOrder from "./ExamOrder";
import ExamTypeId from "./ExamTypeId";

export class Exam {
  constructor(
    private id: ExamId,
    private name: ExamName,
    private description: ExamDescription,
    private duration: ExamDuration,
    private order: ExamOrder,
    private examTypeId: ExamTypeId,
    private level: Level,
    private theme: Theme,
    private questions: Question[]
  ) {}

  get _id(): ExamId {
    return this.id;
  }

  get _name(): ExamName {
    return this.name;
  }

  get _description(): ExamDescription {
    return this.description;
  }

  get _duration(): ExamDuration {
    return this.duration;
  }

  get _order(): ExamOrder {
    return this.order;
  }

  get _examTypeId(): ExamTypeId {
    return this.examTypeId;
  }

  get _level(): Level {
    return this.level;
  }

  get _theme(): Theme {
    return this.theme;
  }

  get _questions(): Question[] {
    return this.questions;
  }

  public static create(
    id: ExamId,
    name: ExamName,
    description: ExamDescription,
    duration: ExamDuration,
    order: ExamOrder,
    examType: ExamTypeId,
    level: Level,
    theme: Theme,
    questions: Question[],
  ): Exam {
    let exam = new Exam(id, name, description, duration, order, examType, level, theme, questions);
    return exam;
  }
}
