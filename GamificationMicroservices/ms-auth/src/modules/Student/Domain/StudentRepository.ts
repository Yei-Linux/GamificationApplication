import { User } from "../../User/Domain/User";
import UserEmail from "../../User/Domain/UserEmail";
import UserId from "../../User/Domain/UserId";
import UserPassword from "../../User/Domain/UserPassword";
import { Student } from "./Student";
import StudentCode from "./StudentCode";

export interface StudentRepository {
    signUpStudent(student: Student,userIdCreated: UserId,idiomId: string, specializationId: string,languageProgrammingId: string): Promise<Student>
    getStudentByIdentifier(identifier:  StudentCode): Promise<[Student,User]>
    getStudentByEmail(email: UserEmail): Promise<Student>
}
