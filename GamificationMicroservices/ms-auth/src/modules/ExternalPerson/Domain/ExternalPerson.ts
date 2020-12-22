import { Person } from "../../Person/domain/Person";

export class ExternalPerson extends Person {
  constructor(public externalPersonId: string, person: Person) {
    super(
        person._personId,
        person._fullName,
        person._lastName,
        person._surName,
        person._age,
        person._identifier
    );
  }

  get _exterPersonId() {
      return this.externalPersonId;
  }
}
