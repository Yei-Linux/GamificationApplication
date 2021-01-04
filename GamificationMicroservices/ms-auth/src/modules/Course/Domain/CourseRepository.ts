import StudentId from "../../Student/Domain/StudentId";
import { Course } from "./Course";

export interface CourseRepository {
    getCoursesWithTutorByStudent(studentId : StudentId) : Promise<Course[]> ;
}