import { inject, injectable } from "inversify";
import StudentId from "../../../Student/Domain/StudentId";
import { Course } from "../../Domain/Course";
import { PostgressCourseRepository } from "../../Infraestructure/Persistence/PostgressCourseRepository";

interface IGetCoursesByStudent {
  handle(studentId: StudentId): Promise<Course[]>;
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
  async handle(studentId: StudentId): Promise<Course[]> {
    let coursesFound: Course[] = await this.coursesRepository.getCoursesWithTutorByStudent(
      studentId
    );
    return coursesFound;
  }
}
