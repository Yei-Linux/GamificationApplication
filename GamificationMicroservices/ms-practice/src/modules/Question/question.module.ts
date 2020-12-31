import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from '../../core/database/database.module';
import { LoggerMiddleware } from '../../middlewares/logger.middleware';
import { QuestionProvider } from './Infraestructure/provider/question.provider';
@Module({
  imports: [DatabaseModule],
  providers: [...QuestionProvider],
  exports: [...QuestionProvider],
})
export class QuestionModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('quesiton');
  }
}
