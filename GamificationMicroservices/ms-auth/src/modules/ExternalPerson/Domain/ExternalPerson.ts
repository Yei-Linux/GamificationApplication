import { Person } from "../../../shared/domain/Person";

export class ExternalPerson extends Person {
  constructor(public externalPersonId: string, person: Person) {
    super(
        person.personId,
        person.fullName,
        person.lastName,
        person.surName,
        person.age,
        person.identifier
    );
  }

  get _exterPersonId() {
      return this.externalPersonId;
  }
}
