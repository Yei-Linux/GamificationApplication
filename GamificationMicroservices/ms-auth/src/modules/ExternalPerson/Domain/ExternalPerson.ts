import { Person } from "../../Person/domain/Person";
import ExternalPersonId from "./ExternalPersonId";

export class ExternalPerson extends Person {
  constructor(private externalPersonId: ExternalPersonId, person: Person) {
    super(
        person._personId,
        person._fullName,
        person._lastName,
        person._surName,
        person._age,
        person._identifier
    );
  }

  get _exterPersonId() : ExternalPersonId {
      return this.externalPersonId;
  }

  public static create(externalPersonId: ExternalPersonId, person: Person) : ExternalPerson{
    let externalPerson = new ExternalPerson(externalPersonId,person);
    return externalPerson;
  }
}
