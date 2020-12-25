import { User } from "../../User/Domain/User";
import UserId from "../../User/Domain/UserId";
import { Tutor } from "./Tutor";
import TutorCode from "./TutorCode";

export interface TutorRepository {
    signUpTutor(tutor: Tutor, userIdCreated: UserId ,idiomId: string, specializationId: string, collegeId : string): Promise<Tutor>
    getTutorByIdentifier(identifier:  TutorCode): Promise<[Tutor,User]>
}
