import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, httpGet, httpPost, request, response, requestBody } from "inversify-express-utils";
import { beans } from '../../../core/beans';
import DEPENDENCY_TYPES from '../../../core/beans/ioc-types';
import { SignInUserDTO } from './useCases/SignInUser/SignInUserDTO';
import { SignUpUserDTO } from './useCases/SignUpUser/SignUpUserDTO';
import { SignUpUserService } from './useCases/SignUpUser/SignUpUserService';

beans.bind<SignUpUserService>(SignUpUserService).toSelf();

@controller("/users")
export class UserController implements interfaces.Controller {
  private signUpUserService : SignUpUserService;

  constructor(@inject(SignUpUserService) signUpUserService: SignUpUserService) {
    this.signUpUserService = signUpUserService;
  }

  @httpGet("/")
  public async getUsers (@request() req: express.Request, @response() res: express.Response) {
    try {
      res.status(200).json({"message":"test"});
    } catch(error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/sign-in")
  public async signInUser(@request() req: express.Request, @response() res: express.Response) {
    try {
      let userRequest : SignInUserDTO = req.body;

    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpPost("/sign-up")
  public async signUpUser(@request() req: express.Request, @response() res: express.Response) {
    try {
      let userSignUpRequest : SignUpUserDTO = req.body;
      let signUpUserResponse = await this.signUpUserService.signUpUser(userSignUpRequest);
      res.status(200).json({response: signUpUserResponse});
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}