import { TutorMapper } from "../../../../../Tutor/Infraestructure/Persistence/sequelize/mapper/TutorMapper";
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
}
