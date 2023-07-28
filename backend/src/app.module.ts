import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartController } from './part/part.controller';

@Module({
  imports: [PartController],
})
export class AppModule {}
