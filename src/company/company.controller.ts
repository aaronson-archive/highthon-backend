import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyInfoDto } from './dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('/create')
  async createCompany(@Body() payload: CompanyInfoDto) {
    return this.companyService.createCompany(payload);
  }

  @Get('/')
  async getCompany(@Query('name') corpName: string) {
    return this.companyService.getCompany(corpName);
  }
}
