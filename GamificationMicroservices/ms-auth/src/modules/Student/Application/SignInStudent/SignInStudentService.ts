import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import UserPassword from "../../../User/Domain/UserPassword";
import { Student } from "../../Domain/Student";
import StudentCode from "../../Domain/StudentCode";
import { PostgressStudentRepository } from "../../Infraestructure/Persistence/PostgressStudentRepository";

beans.bind<PostgressStudentRepository>(PostgressStudentRepository).toSelf();

interface ISignInStudentService {
    signInStudent( identifier: StudentCode, password: UserPassword ) : Promise<Student| void>
}

@injectable()
export class SignInStudentService implements ISignInStudentService {
  protected studentRepository: PostgressStudentRepository;
  constructor(@inject(PostgressStudentRepository) studentRepository: PostgressStudentRepository) {
    this.studentRepository = studentRepository;
  }

  async signInStudent( identifier: StudentCode, password: UserPassword ) : Promise<Student| void> {
    let [studentFound, userFound] = await this.studentRepository.getStudentByIdentifier(identifier);
    if( !studentFound ) throw new Error("Student Not Found");

    let isValid = userFound.validatePassword(password._value);
    if( !isValid ) throw new Error("Incorrect Password");

    return studentFound;
  }
}
