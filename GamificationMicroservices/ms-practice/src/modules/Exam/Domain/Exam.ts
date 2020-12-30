import { Level } from "src/modules/Level/Domain/Level";
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
    private theme: any,
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

  public static create(
    id: ExamId,
    name: ExamName,
    description: ExamDescription,
    duration: ExamDuration,
    order: ExamOrder,
    examType: ExamTypeId,
    level: Level,
    theme: any,
  ): Exam {
    let exam = new Exam(id, name, description, duration, order, examType, level, theme);
    return exam;
  }
}
