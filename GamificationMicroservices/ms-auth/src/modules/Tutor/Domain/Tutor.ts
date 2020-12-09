import { Person } from "../../../shared/domain/Person";

export class Tutor extends Person {
  constructor(public tutorCode: string, person: Person) {
    super(
        person.personId,
        person.fullName,
        person.lastName,
        person.surName,
        person.age,
        person.identifier
    );
  }

  get _tutorCode() {
      return this.tutorCode;
  }
}
