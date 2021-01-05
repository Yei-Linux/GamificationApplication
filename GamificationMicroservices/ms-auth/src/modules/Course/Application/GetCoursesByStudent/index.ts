import { inject, injectable } from "inversify";
import StudentId from "../../../Student/Domain/StudentId";
import { Course } from "../../Domain/Course";
import { PostgressCourseRepository } from "../../Infraestructure/Persistence/PostgressCourseRepository";
import { CourseMapper } from "../../Infraestructure/Persistence/sequelize/mapper";
import { GetCoursesByStudentResponse } from "./response";

interface IGetCoursesByStudent {
  handle(studentId: StudentId): Promise<GetCoursesByStudentResponse[]>;
}

@injectable()
export class GetCoursesByStudent implements IGetCoursesByStudent {
  protected coursesRepository: PostgressCourseRepository;
  constructor(
    @inject(PostgressCourseRepository)
    coursesRepository: PostgressCourseRepository
  ) {
    this.coursesRepository = coursesRepository;
  }
  async handle(studentId: StudentId): Promise<GetCoursesByStudentResponse[]> {
    try {
      let coursesFound: Course[] = await this.coursesRepository.getCoursesWithTutorByStudent(
        studentId
      );
      return CourseMapper.convertDomainsToUseCaseGetCourses(coursesFound);
    } catch (error) {
      throw new Error(error);
    }
  }
}
