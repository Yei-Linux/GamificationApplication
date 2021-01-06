import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../core/beans/ioc-types";
import EnvironmentStudentCourseModel from "../../../shared/infraestructure/Persistence/EnvironmentStudentCourseModel";
import CourseId from "../../Course/Domain/CourseId";
import StudentId from "../../Student/Domain/StudentId";
import { ClassroomRepository } from "../Domain/ClassroomRepository";

@injectable()
export class PostgressClassroomRepository implements ClassroomRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }
    async getCoursesOfStudentRegisteredOnClass(studentId: StudentId): Promise<string[]> {
        let coursesByStudent : EnvironmentStudentCourseModel[] = await EnvironmentStudentCourseModel.findAll({
            where: { studentId: studentId._value },
        });
        return coursesByStudent.map( (courseByStudent : EnvironmentStudentCourseModel) =>courseByStudent.courseId);
    }

    async createStudentClassByCourse(studentId: StudentId, coursesId: string[]): Promise<void> {
        try {
            coursesId.map( (courseId) => {
                this.logger.info(`Insert student on classrooms by course : ${courseId}`);
                EnvironmentStudentCourseModel.create({
                    courseId: courseId,
                    studentId: studentId._value
                });
            })
        } catch (error) {
            this.logger.info(`Error on insert student on classroom`);
            throw new Error(error);
        }
    }
}