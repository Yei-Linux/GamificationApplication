import { inject, injectable } from "inversify";
import { beans } from "../../../../core/beans";
import StudentId from "../../../Student/Domain/StudentId";
import { PostgressClassroomRepository } from "../../Infraestructure/PostgressClassRoomRepository";

beans.bind<PostgressClassroomRepository>(PostgressClassroomRepository).toSelf();

interface ICreateStudentClassroomByCourse {
    createStudentClassByCourse( studentId: StudentId, coursesId: string[] ) : Promise<void>
}

@injectable()
export class CreateStudentClassroomByCourse implements ICreateStudentClassroomByCourse {
  protected classroomPersonRepository: PostgressClassroomRepository;
  constructor(@inject(PostgressClassroomRepository) classroomPersonRepository: PostgressClassroomRepository) {
    this.classroomPersonRepository = classroomPersonRepository;
  }
  async createStudentClassByCourse(studentId: StudentId, coursesId: string[]): Promise<void> {
    let coursesRegisteredOfThisStudent : string[] = await this.classroomPersonRepository.getCoursesOfStudentRegisteredOnClass(studentId);
    coursesId = this.verifyIsStudentRegisteredOnTheseCourses(coursesRegisteredOfThisStudent,coursesId);
    this.classroomPersonRepository.createStudentClassByCourse(studentId,coursesId);
  }

  private verifyIsStudentRegisteredOnTheseCourses(coursesRegisteredOfStudent: string[] , coursesToRegisterOfStudent : string[]) : string[]{
    return coursesToRegisterOfStudent.filter( (courseId) => !coursesRegisteredOfStudent.includes(courseId) );
  }
}
