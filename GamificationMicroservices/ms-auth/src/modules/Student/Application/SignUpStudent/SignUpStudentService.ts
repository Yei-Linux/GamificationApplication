import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import { Person } from "../../../Person/domain/Person";
import PersonAge from "../../../Person/domain/PersonAge";
import PersonFullName from "../../../Person/domain/PersonFullName";
import PersonIdentifier from "../../../Person/domain/PersonIdentifier";
import PersonLastName from "../../../Person/domain/PersonLastName";
import PersonSurName from "../../../Person/domain/PersonSurName";
import UserId from "../../../User/Domain/UserId";
import { Student } from "../../Domain/Student";
import StudentCode from "../../Domain/StudentCode";
import { PostgressStudentRepository } from "../../Infraestructure/Persistence/PostgressStudentRepository";

beans.bind<PostgressStudentRepository>(PostgressStudentRepository).toSelf();

interface ISignUpUserService {
  signUpStudent(studentCode : StudentCode, fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, userIdCreated : UserId, idiomId : string, specializationId : string,languageProgrammingId : string, identifier : PersonIdentifier) : Promise<Student>
}

@injectable()
export class SignUpStudentService implements ISignUpUserService {
  protected studentRepository: PostgressStudentRepository;
  constructor(@inject(PostgressStudentRepository) studentRepository: PostgressStudentRepository) {
    this.studentRepository = studentRepository;
  }

  public async signUpStudent(studentCode : StudentCode, fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, userIdCreated : UserId, idiomId : string, specializationId : string,languageProgrammingId : string, identifier : PersonIdentifier) : Promise<Student> {
    let person : Person = Person.createPerson(null, fullName, lastName, surName, age, identifier);
    let student : Student = Student.create(studentCode,person);
    let studentCreated : Student  = await this.studentRepository.signUpStudent(student,userIdCreated,idiomId, specializationId,languageProgrammingId);
    return studentCreated;
  }
}