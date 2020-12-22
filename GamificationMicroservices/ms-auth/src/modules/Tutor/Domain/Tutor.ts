import { Person } from "../../Person/domain/Person";
import TutorCode from "./TutorCode";

export class Tutor extends Person {
  constructor(public tutorCode: TutorCode, person: Person) {
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
}
