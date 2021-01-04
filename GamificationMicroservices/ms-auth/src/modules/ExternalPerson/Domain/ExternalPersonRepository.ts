import { User } from "../../User/Domain/User";
import UserEmail from "../../User/Domain/UserEmail";
import UserId from "../../User/Domain/UserId";
import { ExternalPerson } from "./ExternalPerson";

export interface ExternalPersonRepository {
    signUpExternalPerson(externalPerson: ExternalPerson,userIdCreated: UserId,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<ExternalPerson>
    getExternalPersonByIdentifier(identifier:  UserEmail): Promise<[ExternalPerson,User]>
}
