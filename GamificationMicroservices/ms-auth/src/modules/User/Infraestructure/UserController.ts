import * as express from 'express';
import { interfaces, controller, httpGet, httpPost, request, response } from "inversify-express-utils";

@controller("/users")
export class UserController implements interfaces.Controller {
  @httpGet("/")
  public async getUsers (@request() req: express.Request, @response() res: express.Response) {
    try {
      res.status(200).json({"message":"test"});
    } catch(error) {
      res.status(400).json(error);
    }
  }
}