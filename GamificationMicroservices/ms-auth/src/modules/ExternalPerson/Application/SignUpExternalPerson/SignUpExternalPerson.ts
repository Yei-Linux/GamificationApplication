import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import { Person } from "../../../Person/domain/Person";
import PersonAge from "../../../Person/domain/PersonAge";
import PersonFullName from "../../../Person/domain/PersonFullName";
import PersonIdentifier from "../../../Person/domain/PersonIdentifier";
import PersonLastName from "../../../Person/domain/PersonLastName";
import PersonSurName from "../../../Person/domain/PersonSurName";
import UserId from "../../../User/Domain/UserId";
import { ExternalPerson } from "../../Domain/ExternalPerson";
import { PostgressExternalPersonRepository } from "../../Infraestucture/Persistence/PostgressExternalPersonRepository";

beans.bind<PostgressExternalPersonRepository>(PostgressExternalPersonRepository).toSelf();

interface ISignUpExternalPersonService {
    signUpExternalPerson(fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, userIdCreated : UserId, idiomId : string, specializationId : string,languageProgrammingId : string, identifier : PersonIdentifier) : Promise<ExternalPerson>
}

@injectable()
export class SignUpExternalPersonService implements ISignUpExternalPersonService {
  protected externalPersonRepository: PostgressExternalPersonRepository;
  constructor(@inject(PostgressExternalPersonRepository) externalPersonRepository: PostgressExternalPersonRepository) {
    this.externalPersonRepository = externalPersonRepository;
  }

  public async signUpExternalPerson(fullName : PersonFullName, lastName : PersonLastName, surName : PersonSurName, age : PersonAge, userIdCreated : UserId, idiomId : string, specializationId : string,languageProgrammingId : string, identifier : PersonIdentifier) : Promise<ExternalPerson> {
    let person : Person = Person.createPerson(null, fullName, lastName, surName, age, identifier);
    let externalPerson : ExternalPerson = ExternalPerson.create(null,person);
    let externalPersonCreated : ExternalPerson  = await this.externalPersonRepository.signUpExternalPerson(externalPerson,userIdCreated,idiomId, specializationId,languageProgrammingId);
    return externalPersonCreated;
  }
}