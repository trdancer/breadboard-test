import { Module } from '@nestjs/common';
import { PartModule } from './part/part.module';
@Module({
  
  imports: [PartModule],
})
export class AppModule {}
