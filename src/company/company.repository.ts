import { createQueryBuilder, EntityRepository, getRepository } from 'typeorm';
import { CompanyInfoDto } from './dto';
import { Company } from './entities';

@EntityRepository(Company)
export class CompanyRepository {
  public async createRepute(payload: CompanyInfoDto): Promise<Company> {
    return await getRepository(Company).save(payload);
  }

  public async findOneByCorpName(corpName: string) {
    return createQueryBuilder()
      .select('repute')
      .from(Company, 'repute')
      .where('repute.corpName = :corpName', { corpName: corpName })
      .getOne();
  }
}
