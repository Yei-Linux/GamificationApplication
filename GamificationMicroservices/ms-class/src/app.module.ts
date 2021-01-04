import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './modules/Course/course.module';
import { RoadMapModule } from './modules/RoadMap/roadmap.module';
import { StudyMethodsModule } from './modules/StudyMethods/studyMethods.module';
import { ThemeModel } from './modules/Theme/Infraestructure/sequelize/ThemeModel';
import { ThemeModule } from './modules/Theme/theme.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [CourseModule,ThemeModule,StudyMethodsModule,RoadMapModule,SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
