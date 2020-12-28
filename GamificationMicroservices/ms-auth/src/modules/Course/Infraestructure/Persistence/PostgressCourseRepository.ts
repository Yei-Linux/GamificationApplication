import { inject, injectable } from "inversify";
import { Logger } from "winston";
import DEPENDENCY_TYPES from "../../../../core/beans/ioc-types";
import EnvironmentStudentCourseModel from "../../../../shared/infraestructure/Persistence/EnvironmentStudentCourseModel";
import PersonModel from "../../../../shared/infraestructure/Persistence/PersonModel";
import StudentId from "../../../Student/Domain/StudentId";
import TutorModel from "../../../Tutor/Infraestructure/Persistence/sequelize/TutorModel";
import { Course } from "../../Domain/Course";
import { CourseRepository } from "../../Domain/CourseRepository";
import CourseModel from "./sequelize/CourseModel";
import { CourseMapper } from "./sequelize/mapper";

@injectable()
export class PostgressCourseRepository implements CourseRepository {
    protected logger : Logger;
    constructor(@inject(DEPENDENCY_TYPES.Logger) logger: Logger) {
        this.logger = logger
    }
    async getCoursesWithTutorByStudent(studentId: StudentId): Promise<Course[]> {
        this.logger.info(`Searching courses by studentId: ${studentId._value}`);
        let environmentsFound : EnvironmentStudentCourseModel[] = await EnvironmentStudentCourseModel.findAll({
            where: { studentId : studentId._value },
            include: [{
                model: CourseModel,
                include: [{
                    model: TutorModel,
                    include: [{
                        model: PersonModel,
                    }]
                }]
            }]
        });
        this.logger.info(`Environments found: ${JSON.stringify(environmentsFound)}`);
        let coursesFound : CourseModel[] = environmentsFound.map( (environment : EnvironmentStudentCourseModel) => environment["CourseModel"] )
        this.logger.info(`Courses found: ${JSON.stringify(coursesFound)}`);
        let data =  CourseMapper.convertCoursesModelToCourses(coursesFound);
        this.logger.info(`Data found: ${JSON.stringify(data)}`);
        return data;
    }
}