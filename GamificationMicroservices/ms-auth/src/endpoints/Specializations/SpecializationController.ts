import * as express from "express";
import { inject } from "inversify";
import {
  interfaces,
  controller,
  httpGet,
  httpPost,
  request,
  response
} from "inversify-express-utils";
import { beans } from "../../core/beans";
import { AuthMiddleware } from "../../core/middlewares/authMiddleware";
import { GetSpecializationsService } from "../../modules/Specialization/Application/GetSpecializations/GetSpecializationsService";
import { GetSpecializationServiceResponse } from "../../modules/Specialization/Application/GetSpecializations/GetSpecializationsServiceResponse";

beans.bind<AuthMiddleware>(AuthMiddleware).toSelf();
beans.bind<GetSpecializationsService>(GetSpecializationsService).toSelf();

@controller("/specializations")
export class SpecializationController implements interfaces.Controller {
  private getSpecializationsService: GetSpecializationsService;

  constructor(
    @inject(GetSpecializationsService)
    getSpecializationsService: GetSpecializationsService
  ) {
    this.getSpecializationsService = getSpecializationsService;
  }

  @httpGet("/", AuthMiddleware)
  public async getSpecializations(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    try {
      let specializations : GetSpecializationServiceResponse[] = await this.getSpecializationsService.getSpecializations();
      res.status(200).json({ data: specializations, msg : "Specializations got successfully" });
    } catch (error) {
      res.status(400).json(error);
    }
  }
}