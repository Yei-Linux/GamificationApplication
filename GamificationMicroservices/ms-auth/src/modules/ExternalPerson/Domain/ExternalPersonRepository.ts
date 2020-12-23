import UserId from "../../User/Domain/UserId";
import { ExternalPerson } from "./ExternalPerson";

export interface ExternalPersonRepository {
    signUpExternalPerson(externalPerson: ExternalPerson,userIdCreated: UserId,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<ExternalPerson>
}
