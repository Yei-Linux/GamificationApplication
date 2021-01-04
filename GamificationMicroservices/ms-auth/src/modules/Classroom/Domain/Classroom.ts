import CourseId from "../../Course/Domain/CourseId";
import StudentId from "../../Student/Domain/StudentId";
import ClassroomId from "./ClassroomId";

export class Classroom {
  constructor(
    private classroomId: ClassroomId,
    private studentId: StudentId,
    private courseId: CourseId
  ) {
    this.classroomId = classroomId;
    this.studentId = studentId;
    this.courseId = courseId;
  }

  get _classRoomId(): ClassroomId {
    return this.classroomId;
  }

  get _studentId(): StudentId {
    return this.studentId;
  }

  get _courseId(): CourseId {
    return this.courseId;
  }

  public static create(
    classroomId: ClassroomId,
    studentId: StudentId,
    courseId: CourseId
  ): Classroom {
    let classRoom = new Classroom(classroomId, studentId, courseId);
    return classRoom;
  }
}
