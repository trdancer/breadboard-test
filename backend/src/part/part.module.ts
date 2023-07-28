import { Module } from '@nestjs/common';
import { PartController as PartController } from './part.controller';
import { PartService as PartService } from './part.service';

@Module({
  imports: [],
  controllers: [PartController],
  providers: [PartService],
})
export class PartModule {}
