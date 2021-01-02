import StudyMethodDescription from "./StudyMethodDescription";
import StudyMethodId from "./StudyMethodId";
import StudyMethodName from "./StudyMethodName";

export class StudyMethod {
  constructor(
    private id: StudyMethodId,
    private name: StudyMethodName,
    private description: StudyMethodDescription,
  ) {}

  get _id(): StudyMethodId {
    return this.id;
  }

  get _name(): StudyMethodName {
    return this.name;
  }

  get _description(): StudyMethodDescription {
    return this.description;
  }

  public static create(
    id: StudyMethodId,
    name: StudyMethodName,
    description: StudyMethodDescription,
  ): StudyMethod {
    let studyMethod = new StudyMethod(id, name, description);
    return studyMethod;
  }
}
