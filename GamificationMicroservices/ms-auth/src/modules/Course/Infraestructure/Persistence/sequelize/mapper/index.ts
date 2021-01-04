import { TutorMapper } from "../../../../../Tutor/Infraestructure/Persistence/sequelize/mapper/TutorMapper";
import { GetCoursesByStudentResponse } from "../../../../Application/GetCoursesByStudent/response";
import { Course } from "../../../../Domain/Course";
import CourseId from "../../../../Domain/CourseId";
import CourseName from "../../../../Domain/CourseName";
import CourseSemester from "../../../../Domain/CourseSemester";
import LanguageProgrammingId from "../../../../Domain/LanguageProgrammingId";
import CourseModel from "../CourseModel";

export class CourseMapper {
  static convertCoursesModelToCourses(coursesModel: CourseModel[]): Course[] {
    return coursesModel.map((courseModel: CourseModel) => {
      return Course.create(
        new CourseId(courseModel.courseId),
        new CourseName(courseModel.courseName),
        new CourseSemester(courseModel.semester),
        TutorMapper.convertTutorModelToTutor(courseModel["TutorModel"]["PersonModel"],courseModel["TutorModel"]),
        new LanguageProgrammingId(courseModel.languageProgrammingId)
      );
    });
  }

  static convertDomainToUseCaseGetCourse(course: Course) : GetCoursesByStudentResponse {
    return {
      courseId: course._courseId._value,
      name: course._name._value,
      semester: null,
      tutor: TutorMapper.convertDomainToResponse(course._tutor),
      langugageProgrammingId: course._languageProgramming._value
    }
  }

  static convertDomainsToUseCaseGetCourses(courses: Course[]) : GetCoursesByStudentResponse[] {
    return courses.map((course: Course) => {
      return CourseMapper.convertDomainToUseCaseGetCourse(course);
    })
  }
}
