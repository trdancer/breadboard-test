import { Controller, Get, Param, Query } from '@nestjs/common';
import { PartService } from './part.service';
import { AggregatedPart } from 'src/types';

@Controller('part')
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Get('/')
  async getPart(
    @Query('partNumber') partNumber: string,
  ): Promise<AggregatedPart> {
    return this.partService.getPart(partNumber);
  }
}
