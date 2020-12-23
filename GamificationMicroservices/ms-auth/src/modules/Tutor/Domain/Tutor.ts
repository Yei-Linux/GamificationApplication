import { Person } from "../../Person/domain/Person";
import TutorCode from "./TutorCode";

export class Tutor extends Person {
  constructor(private tutorCode: TutorCode, person: Person) {
    super(
        person._personId,
        person._fullName,
        person._lastName,
        person._surName,
        person._age,
        person._identifier
    );
  }

  get _tutorCode() : TutorCode{
      return this.tutorCode;
  }

  public static create(tutorCode : TutorCode, person : Person) : Tutor{
    let tutor : Tutor = new Tutor(tutorCode, person);
    return tutor;
  }
}
