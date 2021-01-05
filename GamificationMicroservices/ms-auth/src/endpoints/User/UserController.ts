import * as express from "express";
import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  request,
  response,
} from "inversify-express-utils";
import { beans } from "../../core/beans";
import { SignInRequest, SignUpUserRequest } from "./UserRequest";
import { SignUpUserService } from "../../modules/User/Application/useCases/SignUpUser/SignUpUserService";
import { SignUpStudentService } from "../../modules/Student/Application/SignUpStudent/SignUpStudentService";
import { User } from "../../modules/User/Domain/User";
import StudentCode from "../../modules/Student/Domain/StudentCode";
import PersonFullName from "../../modules/Person/domain/PersonFullName";
import PersonLastName from "../../modules/Person/domain/PersonLastName";
import PersonSurName from "../../modules/Person/domain/PersonSurName";
import PersonAge from "../../modules/Person/domain/PersonAge";
import UserId from "../../modules/User/Domain/UserId";
import PersonIdentifier from "../../modules/Person/domain/PersonIdentifier";
import UserEmail from "../../modules/User/Domain/UserEmail";
import UserPassword from "../../modules/User/Domain/UserPassword";
import UserTypeId from "../../modules/User/Domain/UserTypeId";
import { SignInUserResponse, SignUpUserResponse } from "./UserResponse";
import { EUserPosition } from "./UserPositionEnum";
import { SignUpTutorService } from "../../modules/Tutor/Application/SignUpTutor/SignUpTutorService";
import TutorCode from "../../modules/Tutor/Domain/TutorCode";
import { SignUpExternalPersonService } from "../../modules/ExternalPerson/Application/SignUpExternalPerson/SignUpExternalPerson";
import { SignInStudentService } from "../../modules/Student/Application/SignInStudent/SignInStudentService";
import { JWToken } from "../../core/util/JWToken";
import { SignInTutorService } from "../../modules/Tutor/Application/SignInTutor/SignInTutorService";
import { SignInExternalPersonService } from "../../modules/ExternalPerson/Application/SignInExternalPerson/SignInExternalPersonService";
import { CreateStudentClassroomByCourse } from "../../modules/Classroom/Aplication/CreateStudentClassroomByCourse/CreateStudentClassroomByCourse";

@controller("/users")
export class UserController implements interfaces.Controller {
  private signUpUserService: SignUpUserService;
  private signUpStudentService: SignUpStudentService;
  private signUpTutorService: SignUpTutorService;
  private signUpExternalPersonService : SignUpExternalPersonService;
  private signInStudentService: SignInStudentService;
  private signInTutorService: SignInTutorService;
  private signInExternalPersonService: SignInExternalPersonService;
  private createStudentClassroomByCourse: CreateStudentClassroomByCourse;

  constructor(
    @inject(SignUpUserService) signUpUserService: SignUpUserService,
    @inject(SignUpStudentService) signUpStudentService: SignUpStudentService,
    @inject(SignUpTutorService) signUpTutorService: SignUpTutorService,
    @inject(SignUpExternalPersonService) signUpExternalPersonService: SignUpExternalPersonService,
    @inject(SignInStudentService) signInStudentService: SignInStudentService,
    @inject(SignInTutorService) signInTutorService: SignInTutorService,
    @inject(SignInExternalPersonService) signInExternalPersonService: SignInExternalPersonService,
    @inject(CreateStudentClassroomByCourse) createStudentClassroomByCourse: CreateStudentClassroomByCourse,
  ) {
    this.signUpUserService = signUpUserService;
    this.signUpStudentService = signUpStudentService;
    this.signUpTutorService = signUpTutorService;
    this.signUpExternalPersonService = signUpExternalPersonService;
    this.signInStudentService = signInStudentService;
    this.signInTutorService = signInTutorService;
    this.signInExternalPersonService = signInExternalPersonService;
    this.createStudentClassroomByCourse = createStudentClassroomByCourse;
  }

  @httpPost("/sign-in")
  public async signInUser(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      let userSignInRequest: SignInRequest = req.body;

      switch (userSignInRequest.userPosition) {
        case "STUDENT":
          let [studentFound,userFound] = await this.signInStudentService.signInStudent(new StudentCode(userSignInRequest.identifier),new UserPassword(userSignInRequest.password));
          let token = await JWToken.create({
              userEmail: userFound._userEmail._value,
              fullName: studentFound._fullName._value,
              lastName: studentFound._lastName._value,
              surName: studentFound._surName._value,
          }).generateJWT();

          let studentSignInResponse : SignInUserResponse = {
            token: token,
            personInformation: {
              email: userFound._userEmail._value,
              fullName: studentFound._fullName._value,
              lastName: studentFound._lastName._value,
              surName: studentFound._surName._value,
            }
          }
          res.status(200).json(studentSignInResponse);
          break;
        case "TUTOR":
          let [tutorFound,userTutorFound] = await this.signInTutorService.signInTutor(new TutorCode(userSignInRequest.identifier),new UserPassword(userSignInRequest.password));
          let tokenTutor = await JWToken.create({
              userEmail: userTutorFound._userEmail._value,
              fullName: tutorFound._fullName._value,
              lastName: tutorFound._lastName._value,
              surName: tutorFound._surName._value,
          }).generateJWT();

          let tutorSignInResponse : SignInUserResponse = {
            token: tokenTutor,
            personInformation: {
              email: userTutorFound._userEmail._value,
              fullName: tutorFound._fullName._value,
              lastName: tutorFound._lastName._value,
              surName: tutorFound._surName._value,
            }
          }
          res.status(200).json(tutorSignInResponse);
          break;
        case "EXTERNAL":
          let [externalPersonFound,userExternalFound] = await this.signInExternalPersonService.signInExternalPerson(new UserEmail(userSignInRequest.identifier),new UserPassword(userSignInRequest.password));
          let tokenExternal = await JWToken.create({
              userEmail: userExternalFound._userEmail._value,
              fullName: externalPersonFound._fullName._value,
              lastName: externalPersonFound._lastName._value,
              surName: externalPersonFound._surName._value,
          }).generateJWT();

          let externalSignInResponse : SignInUserResponse = {
            token: tokenExternal,
            personInformation: {
              email: userExternalFound._userEmail._value,
              fullName: externalPersonFound._fullName._value,
              lastName: externalPersonFound._lastName._value,
              surName: externalPersonFound._surName._value,
            }
          }
          res.status(200).json(externalSignInResponse);
          break;
      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  @httpPost("/sign-up")
  public async signUpUser(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      let userSignUpRequest: SignUpUserRequest = req.body;
      userSignUpRequest.surname = "dasdad";
      userSignUpRequest.age = 40;
      userSignUpRequest.collegeId = null;
      let userCreated: User = await this.signUpUserService.signUpUser(
        new UserEmail(userSignUpRequest.email),
        new UserPassword(userSignUpRequest.password),
        new UserTypeId(userSignUpRequest.userTypeId)
      );

      switch (userSignUpRequest.userPosition) {
        case "STUDENT":
          let studentCreated = await this.signUpStudentService.signUpStudent(
            new StudentCode(userSignUpRequest.identifier),
            new PersonFullName(userSignUpRequest.fullName),
            new PersonLastName(userSignUpRequest.lastName),
            new PersonSurName(userSignUpRequest.surname),
            new PersonAge(userSignUpRequest.age),
            new UserId(userCreated._userId._value),
            userSignUpRequest.idiomId,
            userSignUpRequest.specializationId,
            userSignUpRequest.languageProgrammingId,
            new PersonIdentifier(userSignUpRequest.identifier)
          );
          this.createStudentClassroomByCourse.createStudentClassByCourse(studentCreated._studentId,userSignUpRequest.coursesId);
          let userResponseStudent: SignUpUserResponse = {
            email: userSignUpRequest.email,
            identifier: studentCreated._studentCode._value,
            userPosition: EUserPosition.STUDENT
          };
          res.status(200).json(userResponseStudent);
          break;

        case "TUTOR":
          let tutorCreated = await this.signUpTutorService.signUpTutor(
            new TutorCode(userSignUpRequest.identifier),
            new PersonFullName(userSignUpRequest.fullName),
            new PersonLastName(userSignUpRequest.lastName),
            new PersonSurName(userSignUpRequest.surname),
            new PersonAge(userSignUpRequest.age),
            new UserId(userCreated._userId._value),
            userSignUpRequest.idiomId,
            userSignUpRequest.specializationId,
            userSignUpRequest.collegeId,
            new PersonIdentifier(userSignUpRequest.identifier)
          );
          let userResponseTutor: SignUpUserResponse = {
            identifier: tutorCreated._tutorCode._value,
            userPosition: EUserPosition.TUTOR
          };
          res.status(200).json(userResponseTutor);
          break;

        case "EXTERNAL":
          let externalPersonCreated = await this.signUpExternalPersonService.signUpExternalPerson(
            new PersonFullName(userSignUpRequest.fullName),
            new PersonLastName(userSignUpRequest.lastName),
            new PersonSurName(userSignUpRequest.surname),
            new PersonAge(userSignUpRequest.age),
            new UserId(userCreated._userId._value),
            userSignUpRequest.idiomId,
            userSignUpRequest.specializationId,
            userSignUpRequest.languageProgrammingId,
            new PersonIdentifier(userSignUpRequest.identifier)
          );
          let externalPersonResponse: SignUpUserResponse = {
            userPosition: EUserPosition.EXTERNAL
          };
          res.status(200).json(externalPersonResponse);
          break;

      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
