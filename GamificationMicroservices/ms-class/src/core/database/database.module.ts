import { Module } from '@nestjs/common';
import { databaseProviders } from './Database';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})

export class DatabaseModule {}