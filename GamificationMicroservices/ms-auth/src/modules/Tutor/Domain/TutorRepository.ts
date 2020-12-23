import UserId from "../../User/Domain/UserId";
import { Tutor } from "./Tutor";

export interface TutorRepository {
    signUpTutor(tutor: Tutor, userIdCreated: UserId ,idiomId: string, specializationId: string, collegeId : string): Promise<Tutor>
}
