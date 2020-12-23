import { User } from "../../User/Domain/User";
import UserId from "../../User/Domain/UserId";
import UserPassword from "../../User/Domain/UserPassword";
import { Student } from "./Student";
import StudentCode from "./StudentCode";

export interface StudentRepository {
    signUpStudent(student: Student,userIdCreated: UserId,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<Student>
    getStudentByIdentifier(identifier:  StudentCode): Promise<[Student,User]>
}
