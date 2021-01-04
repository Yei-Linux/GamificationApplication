import CourseId from "../../Course/Domain/CourseId";
import StudentId from "../../Student/Domain/StudentId";
import { Classroom } from "./Classroom";

export interface ClassroomRepository {
    createStudentClassByCourse( studentId: StudentId, courseId: string[] ) : Promise<void>
    getCoursesOfStudentRegisteredOnClass( studentId: StudentId ) : Promise<string[]>
}
