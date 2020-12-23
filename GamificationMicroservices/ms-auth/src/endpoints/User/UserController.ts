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
import { SignUpUserResponse } from "./UserResponse";
import { EUserPosition } from "./UserPositionEnum";
import { SignUpTutorService } from "../../modules/Tutor/Application/SignUpTutor/SignUpTutorService";
import TutorCode from "../../modules/Tutor/Domain/TutorCode";
import { SignUpExternalPersonService } from "../../modules/ExternalPerson/Application/SignUpExternalPerson/SignUpExternalPerson";
import { SignInStudentService } from "../../modules/Student/Application/SignInStudent/SignInStudentService";

beans.bind<SignUpUserService>(SignUpUserService).toSelf();
beans.bind<SignUpStudentService>(SignUpStudentService).toSelf();
beans.bind<SignUpTutorService>(SignUpTutorService).toSelf();
beans.bind<SignUpExternalPersonService>(SignUpExternalPersonService).toSelf();
beans.bind<SignInStudentService>(SignInStudentService).toSelf();

@controller("/users")
export class UserController implements interfaces.Controller {
  private signUpUserService: SignUpUserService;
  private signUpStudentService: SignUpStudentService;
  private signUpTutorService: SignUpTutorService;
  private signUpExternalPersonService : SignUpExternalPersonService;
  private signInStudentService: SignInStudentService;

  constructor(
    @inject(SignUpUserService) signUpUserService: SignUpUserService,
    @inject(SignUpStudentService) signUpStudentService: SignUpStudentService,
    @inject(SignUpTutorService) signUpTutorService: SignUpTutorService,
    @inject(SignUpExternalPersonService) signUpExternalPersonService: SignUpExternalPersonService,
    @inject(SignInStudentService) signInStudentService: SignInStudentService
  ) {
    this.signUpUserService = signUpUserService;
    this.signUpStudentService = signUpStudentService;
    this.signUpTutorService = signUpTutorService;
    this.signUpExternalPersonService = signUpExternalPersonService;
    this.signInStudentService = signInStudentService;
  }

  @httpGet("/")
  public async getUsers(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      res.status(200).json({ message: "test" });
    } catch (error) {
      res.status(400).json(error);
    }
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

          break;
        case "TUTOR":

          break;
        case "EXTERNAL":

          break;
      }

    } catch (error) {
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
          let userResponseStudent: SignUpUserResponse = {
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
