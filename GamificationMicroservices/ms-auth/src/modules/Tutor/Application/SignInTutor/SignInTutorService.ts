import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import { User } from "../../../User/Domain/User";
import UserPassword from "../../../User/Domain/UserPassword";
import { Tutor } from "../../Domain/Tutor";
import TutorCode from "../../Domain/TutorCode";
import { PostgressTutorRepository } from "../../Infraestructure/Persistence/PostgressTutorRepository";

interface ISignInTutorService {
    signInTutor( identifier: TutorCode, password: UserPassword ) : Promise<[Tutor,User]>
}

@injectable()
export class SignInTutorService implements ISignInTutorService {
  protected tutorRepository: PostgressTutorRepository;
  constructor(@inject(PostgressTutorRepository) tutorRepository: PostgressTutorRepository) {
    this.tutorRepository = tutorRepository;
  }

  async signInTutor( identifier: TutorCode, password: UserPassword ) : Promise<[Tutor,User]> {
    let [tutorFound, userFound] = await this.tutorRepository.getTutorByIdentifier(identifier);
    if( !tutorFound ) throw new Error("Tutor Not Found");

    let isValid = await userFound.validatePassword(password._value);
    if( !isValid ) throw new Error("Incorrect Password");

    return [tutorFound,userFound];
  }
}