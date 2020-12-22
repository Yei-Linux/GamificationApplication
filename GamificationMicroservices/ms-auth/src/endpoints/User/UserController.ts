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
import { SignInUserDTO } from "../../modules/User/Application/useCases/SignInUser/SignInUserDTO";
import { SignUpUserRequest } from "./UserRequest";
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

beans.bind<SignUpUserService>(SignUpUserService).toSelf();
beans.bind<SignUpStudentService>(SignUpStudentService).toSelf();

@controller("/users")
export class UserController implements interfaces.Controller {
  private signUpUserService: SignUpUserService;
  private signUpStudentService: SignUpStudentService;

  constructor(
    @inject(SignUpUserService) signUpUserService: SignUpUserService,
    @inject(SignUpStudentService) signUpStudentService: SignUpStudentService
  ) {
    this.signUpUserService = signUpUserService;
    this.signUpStudentService = signUpStudentService;
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
      let userRequest: SignInUserDTO = req.body;
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
          let userResponse: SignUpUserResponse = {
            identifier: studentCreated._studentCode._value,
            userPosition: EUserPosition.STUDENT
          };
          res.status(200).json(userResponse);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
