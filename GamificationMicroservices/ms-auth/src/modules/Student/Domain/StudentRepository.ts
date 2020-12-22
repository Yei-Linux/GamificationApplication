import UserId from "../../User/Domain/UserId";
import { Student } from "./Student";

export interface StudentRepository {
    signUpStudent(student: Student,userIdCreated: UserId,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<Student>
}
