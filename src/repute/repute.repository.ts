import { createQueryBuilder, EntityRepository, getRepository } from 'typeorm';
import { Repute } from './entities';
import { CreateReputeDto } from './dto';

@EntityRepository(Repute)
export class ReputeRepository {
  public async createRepute(payload: CreateReputeDto): Promise<Repute> {
    return await getRepository(Repute).save(payload);
  }

  public async findOneByCorpName(corpName: string) {
    return createQueryBuilder()
      .select('repute')
      .from(Repute, 'repute')
      .where('repute.corpName = :corpName', { corpName: corpName })
      .getOne();
  }
}
