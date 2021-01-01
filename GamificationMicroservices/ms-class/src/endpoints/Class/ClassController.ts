import { Controller, Get, HttpStatus, Logger, Param, Res } from '@nestjs/common';
import { GetClassService } from '../../modules/Class/Application/GetClassById';
import ClassId from '../../modules/Class/Domain/ClassId';

@Controller('class')
export class ClassController {
  constructor(private readonly getClassService: GetClassService) {}

  @Get(':id')
  async getRoadMapByStudent(@Param('id') id: string,@Res() res: any) {
    try {
      let classFound: any = this.getClassService.handle(new ClassId(id));
      res.status(HttpStatus.OK).json({ data: classFound });
    } catch (error) {
      Logger.log(`Error found: ${error}`);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ data: error });
    }
  }
}
