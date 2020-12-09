import { inject, injectable } from "inversify";
import { beans } from "../../../../../core/beans";
import DEPENDENCY_TYPES from "../../../../../core/beans/ioc-types";
import { Person } from "../../../../../shared/domain/Person";
import { StudentMapper } from "../../../../../shared/utils/mappers/StudentMapper";
import { UserMapper } from "../../../../../shared/utils/mappers/UserMapper";
import { Student } from "../../../../Student/Domain/Student";
import { User } from "../../../Domain/User";
import UserModel from "../../../Infraestructure/Persistence/UserModel";
import { UserRepository } from "../../../Infraestructure/Persistence/UserRepository";
import UserTypeModel from "../../../Infraestructure/Persistence/UserTypeModel";
import { SignUserResponse } from "../SignInUser/SingInUserResponse";
import { SignUpUserDTO } from "./SignUpUserDTO";

beans.bind<UserRepository>(UserRepository).toSelf();

interface ISignUpUserService {
  signUpUser(signUpRequest: SignUpUserDTO);
}

@injectable()
export class SignUpUserService implements ISignUpUserService {
  protected userRespository: UserRepository;
  constructor(@inject(UserRepository) userRepository: UserRepository) {
    this.userRespository = userRepository;
  }

  private async registerUser(user: User) : Promise<User>{
    await user.hashingPassword();
    let userCreated : UserModel = await this.userRespository.registerUser(user);
    return UserMapper.convertUserModelToUser(userCreated);
  }

  private async registerStudent(
    student: Student,
    userIdCreated: string,
    idiomId: string,
    specializationId: string,
    languageProgrammingId: string
  ) : Promise<Student>{
    let [studentCreated,personCreated] = await this.userRespository.registerStudent(
      student,
      userIdCreated,
      idiomId,
      specializationId,
      languageProgrammingId
    );
    return StudentMapper.convertStudentModelToStudent(personCreated,studentCreated);
  }

  async signUpUser(signUpRequest: SignUpUserDTO) {
    let user = new User(
      null,
      signUpRequest.email,
      signUpRequest.password,
      signUpRequest.userTypeId
    );
    let userCreated = await this.registerUser(user);

    let person = new Person(
      null,
      signUpRequest.fullName,
      signUpRequest.lastName,
      signUpRequest.surname,
      signUpRequest.age,
      signUpRequest.identifier
    );
    let student = new Student(signUpRequest.identifier, person);
    let userPositionCreated;
    switch (signUpRequest.userPosition) {
      case "STUDENT":
        userPositionCreated = await this.registerStudent(student, userCreated.userId,signUpRequest.idiomId,signUpRequest.specializationId,signUpRequest.languageProgrammingId);
        break;
      case "TUTOR":
        break
      case "EXTERNAL":
        break;
      default:
        break;
    }
    return userPositionCreated;
  }
}
