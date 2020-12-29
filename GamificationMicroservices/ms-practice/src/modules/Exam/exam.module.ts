import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';
import { ExamProvider } from './Infraestructure/provider/exam.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...ExamProvider],
  exports: [...ExamProvider],
})
export class ExamModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('exam');
  }
}
