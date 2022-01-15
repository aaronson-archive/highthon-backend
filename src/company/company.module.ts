import { Module } from '@nestjs/common';
import { ReputeRepository } from '@src/repute/repute.repository';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';

@Module({
  imports: [],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyRepository, ReputeRepository],
  exports: [],
})
export class CompanyModule {}
