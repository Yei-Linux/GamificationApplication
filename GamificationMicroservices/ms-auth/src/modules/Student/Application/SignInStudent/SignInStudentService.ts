import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import { User } from "../../../User/Domain/User";
import UserPassword from "../../../User/Domain/UserPassword";
import { Student } from "../../Domain/Student";
import StudentCode from "../../Domain/StudentCode";
import { PostgressStudentRepository } from "../../Infraestructure/Persistence/PostgressStudentRepository";

interface ISignInStudentService {
    signInStudent( identifier: StudentCode, password: UserPassword ) : Promise<[Student,User]>
}

@injectable()
export class SignInStudentService implements ISignInStudentService {
  protected studentRepository: PostgressStudentRepository;
  constructor(@inject(PostgressStudentRepository) studentRepository: PostgressStudentRepository) {
    this.studentRepository = studentRepository;
  }

  async signInStudent( identifier: StudentCode, password: UserPassword ) : Promise<[Student,User]> {
    let [studentFound, userFound] = await this.studentRepository.getStudentByIdentifier(identifier);
    if( !studentFound ) throw new Error("Student Not Found");

    let isValid = await userFound.validatePassword(password._value);
    if( !isValid ) throw new Error("Incorrect Password");

    return [studentFound,userFound];
  }
}
