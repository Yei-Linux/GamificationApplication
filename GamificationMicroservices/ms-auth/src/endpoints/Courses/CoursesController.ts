import * as express from "express";
import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  request,
  response,
  requestParam
} from "inversify-express-utils";
import { beans } from "../../core/beans";
import { AuthMiddleware } from "../../core/middlewares/authMiddleware";
import { GetCoursesByStudent } from "../../modules/Course/Application/GetCoursesByStudent";
import { Course } from "../../modules/Course/Domain/Course";
import { GetStudentByEmail } from "../../modules/Student/Application/GetStudentByEmail";
import { Student } from "../../modules/Student/Domain/Student";
import StudentId from "../../modules/Student/Domain/StudentId";
import UserEmail from "../../modules/User/Domain/UserEmail";

@controller("/courses")
export class CoursesController implements interfaces.Controller {
  private getCoursesByStudentService: GetCoursesByStudent;
  private getStudentByEmailService: GetStudentByEmail;

  constructor(
    @inject(GetCoursesByStudent)
    getCoursesByStudent: GetCoursesByStudent,
    @inject(GetStudentByEmail)
    getStudentByEmail: GetStudentByEmail
  ) {
    this.getCoursesByStudentService = getCoursesByStudent;
    this.getStudentByEmailService = getStudentByEmail;
  }

  @httpGet("/student", AuthMiddleware)
  public async getCoursesByStudent(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      let studentFound : Student = await this.getStudentByEmailService.handle(new UserEmail(req["headers"]["email"].toString()));
      let coursesFound : Course[] = await this.getCoursesByStudentService.handle(new StudentId(studentFound._studentId._value));
      res.status(200).json({ data: coursesFound, msg : "Courses got successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
