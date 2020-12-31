import { StudentAnswer } from "./StudentAnswer";
import { StudentExam } from "./StudentExam";

export interface StudentExamRepository {
    insertStudentExamRepository(studentExam: StudentExam) : Promise<StudentExam>;
    insertStudentAnswersOfExamRepository(studentAnswersOfExam: StudentAnswer) : Promise<void>;
}