import { Person } from "../../Person/domain/Person";
import StudentCode from "./StudentCode";

export class Student extends Person {
  constructor(private studentCode: StudentCode, person: Person) {
    super(
        person._personId,
        person._fullName,
        person._lastName,
        person._surName,
        person._age,
        person._identifier
    );
  }

  get _studentCode() : StudentCode{
      return this.studentCode;
  }

  public static create(studentCode : StudentCode, person : Person) : Student{
    let student : Student = new Student(studentCode, person);
    return student;
  }
}
