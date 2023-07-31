import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartController } from './part/part.controller';
import { PartModule } from './part/part.module';

@Module({
  imports: [PartModule],

})
export class AppModule {}
