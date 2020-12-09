import { Person } from "../../../shared/domain/Person";

export class Student extends Person {
  constructor(public studentCode: string, person: Person) {
    super(
        person.personId,
        person.fullName,
        person.lastName,
        person.surName,
        person.age,
        person.identifier
    );
  }

  get _studentCode() {
      return this.studentCode;
  }
}
