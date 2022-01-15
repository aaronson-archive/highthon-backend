import { Injectable } from '@nestjs/common';
import { ReputeRepository } from './repute.repository';
import { CreateReputeDto } from './dto';
import { Repute } from './entities';

@Injectable()
export class ReputeService {
  constructor(private readonly reputeRepository: ReputeRepository) {}

  async write(repute: CreateReputeDto): Promise<Repute> {
    const average = [
      repute.welfarePay,
      repute.workLifeBalance,
      repute.companyCulture,
      repute.promotionPotential,
      repute.teamMember,
    ]
      .map(Number)
      .reduce((a, b) => a + b / 5);

    return await this.reputeRepository.createRepute({
      ...repute,
      average,
    });
  }

  async show(corpName: string): Promise<Repute> {
    return await this.reputeRepository.findOneByCorpName(corpName);
  }
}
