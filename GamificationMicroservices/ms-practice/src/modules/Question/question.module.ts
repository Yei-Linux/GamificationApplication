import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
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
