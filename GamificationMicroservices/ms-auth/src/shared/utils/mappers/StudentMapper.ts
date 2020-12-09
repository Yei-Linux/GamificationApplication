import { Student } from "../../../modules/Student/Domain/Student";
import StudentModel from "../../../modules/Student/Infraestructure/Persistence/StudentModel";
import { User } from "../../../modules/User/Domain/User";
import { Person } from "../../domain/Person";
import PersonModel from "../../infraestructure/Persistence/PersonModel";

export class StudentMapper {
    static convertStudentModelToStudent(person: PersonModel,student: StudentModel): Student {
        let personDomain = new Person(person.personId,person.fullName,person.lastName,person.surName,person.age,null);
        return new Student(student.studentCode,personDomain);
    }
}