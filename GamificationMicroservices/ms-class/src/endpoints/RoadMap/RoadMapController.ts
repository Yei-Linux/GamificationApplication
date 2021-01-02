import {
  Controller,
  Get,
  Post,
  Body,
  Logger,
  HttpStatus,
  Res,
} from '@nestjs/common';
import CourseId from '../../modules/Course/Domain/CourseId';
import { GetRoadMapService } from '../../modules/RoadMap/Application/GetRoadMap';
import { InsertStudentRoadMap } from '../../modules/RoadMap/Application/InsertStudentRoadMap';
import RoadMapEmail from '../../modules/RoadMap/Domain/RoadMapEmail';
import { GetRoadMapRequest, PostRoadMapStudentRequest } from './RoadMapRequest';

@Controller('roadmap')
export class RoadMapController {
  constructor(
    private readonly getRoadMapService: GetRoadMapService,
    private readonly insertStudentRoadMapService: InsertStudentRoadMap,
  ) {}

  @Post("/student")
  async getRoadMapByStudent(
    @Body() getRoadMapRequest: GetRoadMapRequest,
    @Res() res: any,
  ) {
    try {
      let roadMapResponse = await this.getRoadMapService.handle(
        getRoadMapRequest.studentEmail,
        getRoadMapRequest.courseId
      );
      res.status(HttpStatus.OK).json({ data: roadMapResponse });
    } catch (error) {
      Logger.log(`Error found: ${error}`);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: error });
    }
  }

  @Post()
  async insertRoadMapByStudent(
    @Body() postRoadMapStudentRequest: PostRoadMapStudentRequest,
    @Res() res: any,
  ) {
    try {
      await this.insertStudentRoadMapService.handle(postRoadMapStudentRequest.studentEmail,postRoadMapStudentRequest.roadMap);
      res.status(HttpStatus.OK).json({ data: "Student Road Map created successfully" });
    } catch (error) {
      Logger.log(`Error found: ${error}`);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: error });
    }
  }
}
