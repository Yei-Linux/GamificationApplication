import { inject, injectable } from "inversify";
import { User } from "../../../User/Domain/User";
import UserEmail from "../../../User/Domain/UserEmail";
import UserPassword from "../../../User/Domain/UserPassword";
import { ExternalPerson } from "../../Domain/ExternalPerson";
import { PostgressExternalPersonRepository } from "../../Infraestucture/Persistence/PostgressExternalPersonRepository";

interface ISignInExternalPersonService {
    signInExternalPerson( identifier: UserEmail, password: UserPassword ) : Promise<[ExternalPerson,User]>
}

@injectable()
export class SignInExternalPersonService implements ISignInExternalPersonService {
  protected externalPersonRepository: PostgressExternalPersonRepository;
  constructor(@inject(PostgressExternalPersonRepository) externalPersonRepository: PostgressExternalPersonRepository) {
    this.externalPersonRepository = externalPersonRepository;
  }

  async signInExternalPerson( identifier: UserEmail, password: UserPassword ) : Promise<[ExternalPerson,User]> {
    let [externalPersonFound, userFound] = await this.externalPersonRepository.getExternalPersonByIdentifier(identifier);
    if( !externalPersonFound ) throw new Error("ExternalPerson Not Found");

    let isValid = await userFound.validatePassword(password._value);
    if( !isValid ) throw new Error("Incorrect Password");

    return [externalPersonFound,userFound];
  }
}
