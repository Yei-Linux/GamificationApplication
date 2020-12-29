import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { StudentAnswerProvider } from './Infraestructure/provider/studentAnswer.provider';
@Module({
  imports: [DatabaseModule],
  providers: [...StudentAnswerProvider],
  exports: [...StudentAnswerProvider],
})
export class StudentAnswerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('studentanswer');
  }
}
