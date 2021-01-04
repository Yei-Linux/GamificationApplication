import StudentId from "../../Student/Domain/StudentId";
import { Tutor } from "../../Tutor/Domain/Tutor";
import CourseId from "./CourseId";
import CourseName from "./CourseName";
import CourseSemester from "./CourseSemester";
import LanguageProgrammingId from "./LanguageProgrammingId";

export class Course {
  constructor(
    private courseId: CourseId,
    private name: CourseName,
    private semester: CourseSemester,
    private tutor: Tutor,
    private langugageProgrammingId: LanguageProgrammingId
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

  get _tutor(): Tutor {
    return this.tutor;
  }

  get _languageProgramming(): LanguageProgrammingId {
    return this.langugageProgrammingId;
  }

  public static create(
    courseId: CourseId,
    name: CourseName,
    semester: CourseSemester,
    tutor: Tutor,
    langugageProgrammingId: LanguageProgrammingId
  ): Course {
    let classRoom = new Course(courseId, name, semester, tutor, langugageProgrammingId);
    return classRoom;
  }
}
