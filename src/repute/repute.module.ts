import { Module } from '@nestjs/common';
import { ReputeController } from './repute.controller';
import { ReputeRepository } from './repute.repository';
import { ReputeService } from './repute.service';

@Module({
  imports: [],
  controllers: [ReputeController],
  providers: [ReputeService, ReputeRepository],
  exports: [ReputeRepository],
})
export class ReputeModule {}
