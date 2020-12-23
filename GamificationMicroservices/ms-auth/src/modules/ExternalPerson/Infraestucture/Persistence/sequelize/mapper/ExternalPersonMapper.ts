import PersonModel from "../../../../../../shared/infraestructure/Persistence/PersonModel";
import { Person } from "../../../../../Person/domain/Person";
import PersonAge from "../../../../../Person/domain/PersonAge";
import PersonFullName from "../../../../../Person/domain/PersonFullName";
import PersonId from "../../../../../Person/domain/PersonId";
import PersonLastName from "../../../../../Person/domain/PersonLastName";
import PersonSurName from "../../../../../Person/domain/PersonSurName";
import { ExternalPerson } from "../../../../Domain/ExternalPerson";
import ExternalPersonId from "../../../../Domain/ExternalPersonId";
import ExternalPersonModel from "../ExternalPersonModel";

export class ExternalPersonMapper {
    static convertExternalPersonModelToExternalPerson(
      person: PersonModel,
      externalPerson: ExternalPersonModel
    ): ExternalPerson {
      let personDomain = new Person(
        new PersonId(person.personId),
        new PersonFullName(person.fullName),
        new PersonLastName(person.lastName),
        new PersonSurName(person.surName),
        new PersonAge(person.age),
        null
      );
      return new ExternalPerson(new ExternalPersonId(externalPerson.externalId), personDomain);
    }
  }
