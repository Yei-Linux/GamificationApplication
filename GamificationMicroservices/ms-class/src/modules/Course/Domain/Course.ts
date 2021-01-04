import CourseId from "./CourseId";
import CourseName from "./CourseName";
import CourseSemester from "./CourseSemester";

export class Course {
  constructor(
    private courseId: CourseId,
    private name: CourseName,
    private semester: CourseSemester,
  ) {}

  get _courseId(): CourseId {
    return this.courseId;
  }

  get _name(): CourseName {
    return this.name;
  }

  get _semester(): CourseSemester {
    return this.semester;
  }

  public static create(
    courseId: CourseId,
    name: CourseName,
    semester: CourseSemester
  ): Course {
    let course = new Course(courseId, name, semester);
    return course;
  }
}
