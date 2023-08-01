import { Controller, Get, Param } from '@nestjs/common';
import { PartService } from './part.service';
import { AggregatedPart } from 'src/types';

@Controller('parts')
export class PartController {
  constructor(private readonly partService: PartService) {}

  @Get(':partNumber')
  async getPart(
    @Param('partNumber') partNumber: string,
  ): Promise<AggregatedPart> {
    return this.partService.getPart(partNumber);
  }
}
