import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import { Person } from "../../../Person/domain/Person";
import PersonAge from "../../../Person/domain/PersonAge";
import PersonFullName from "../../../Person/domain/PersonFullName";
import PersonIdentifier from "../../../Person/domain/PersonIdentifier";
import PersonLastName from "../../../Person/domain/PersonLastName";
import PersonSurName from "../../../Person/domain/PersonSurName";
import UserId from "../../../User/Domain/UserId";
import { Tutor } from "../../Domain/Tutor";
import TutorCode from "../../Domain/TutorCode";
import { PostgressTutorRepository } from "../../Infraestructure/Persistence/PostgressTutorRepository";

beans.bind<PostgressTutorRepository>(PostgressTutorRepository).toSelf();

interface ISignUpTutorService {
  signUpTutor(tutorCode : TutorCode, fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, userIdCreated : UserId, idiomId : string, specializationId : string,collegeId : string , identifier : PersonIdentifier) : Promise<Tutor>
}

@injectable()
export class SignUpTutorService implements ISignUpTutorService {
  protected tutorRepository: PostgressTutorRepository;
  constructor(@inject(PostgressTutorRepository) tutorRepository: PostgressTutorRepository) {
    this.tutorRepository = tutorRepository;
  }

  public async signUpTutor(tutorCode : TutorCode, fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, userIdCreated : UserId, idiomId : string, specializationId : string,collegeId : string , identifier : PersonIdentifier) : Promise<Tutor> {
    let person : Person = Person.createPerson(null, fullName, lastName, surName, age, identifier);
    let tutor : Tutor = Tutor.create(tutorCode,null,person);
    let studentCreated : Tutor  = await this.tutorRepository.signUpTutor(tutor,userIdCreated,idiomId, specializationId,collegeId);
    return studentCreated;
  }
}