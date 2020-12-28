import PersonModel from "../../../../../../shared/infraestructure/Persistence/PersonModel";
import { Person } from "../../../../../Person/domain/Person";
import PersonAge from "../../../../../Person/domain/PersonAge";
import PersonFullName from "../../../../../Person/domain/PersonFullName";
import PersonId from "../../../../../Person/domain/PersonId";
import PersonLastName from "../../../../../Person/domain/PersonLastName";
import PersonSurName from "../../../../../Person/domain/PersonSurName";
import { Tutor } from "../../../../Domain/Tutor";
import TutorCode from "../../../../Domain/TutorCode";
import TutorId from "../../../../Domain/TutorId";
import TutorModel from "../TutorModel";

export class TutorMapper {
    static convertTutorModelToTutor(
      person: PersonModel,
      tutor: TutorModel
    ): Tutor {
      let personDomain = new Person(
        new PersonId(person.personId),
        new PersonFullName(person.fullName),
        new PersonLastName(person.lastName),
        new PersonSurName(person.surName),
        new PersonAge(person.age),
        null
      );
      return new Tutor(new TutorCode(tutor.tutorCode),new TutorId(tutor.tutorId), personDomain);
    }
  }
