import { Student } from "../../../../Domain/Student";
import StudentModel from "../StudentModel";
import PersonModel from "../../../../../../shared/infraestructure/Persistence/PersonModel";
import { Person } from "../../../../../Person/domain/Person";
import PersonId from "../../../../../Person/domain/PersonId";
import PersonFullName from "../../../../../Person/domain/PersonFullName";
import PersonLastName from "../../../../../Person/domain/PersonLastName";
import PersonSurName from "../../../../../Person/domain/PersonSurName";
import PersonAge from "../../../../../Person/domain/PersonAge";
import StudentCode from "../../../../Domain/StudentCode";
import StudentId from "../../../../Domain/StudentId";

export class StudentMapper {
  static convertStudentModelToStudent(
    person: PersonModel,
    student: StudentModel
  ): Student {
    let personDomain = new Person(
      new PersonId(person.personId),
      new PersonFullName(person.fullName),
      new PersonLastName(person.lastName),
      new PersonSurName(person.surName),
      new PersonAge(person.age),
      null
    );
    return new Student(new StudentCode(student.studentCode),new StudentId(student.studentId), personDomain);
  }
}
