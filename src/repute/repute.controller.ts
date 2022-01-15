import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ReputeService } from './repute.service';
import { CreateReputeDto } from './dto';

@Controller('repute')
export class ReputeController {
  constructor(private readonly reputeService: ReputeService) {}

  @Post('/create')
  repute(@Body() body: CreateReputeDto) {
    return this.reputeService.write(body);
  }

  @Get('/corp')
  showReputeCorp(@Query('name') corpName: string) {
    return this.reputeService.show(corpName);
  }
}
