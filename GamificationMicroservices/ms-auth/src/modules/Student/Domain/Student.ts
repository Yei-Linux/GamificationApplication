import { Person } from "../../Person/domain/Person";
import StudentCode from "./StudentCode";
import StudentId from "./StudentId";

export class Student extends Person {
  constructor(private studentCode: StudentCode,private studentId : StudentId, person: Person) {
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

  get _studentId() : StudentId {
    return this.studentId;
  }

  public static create(studentCode : StudentCode, studentId : StudentId, person : Person) : Student{
    let student : Student = new Student(studentCode, studentId, person);
    return student;
  }
}
