import { Injectable } from '@nestjs/common';
import { ReputeRepository } from '@src/repute/repute.repository';
import { CompanyRepository } from './company.repository';
import { CompanyInfoDto } from './dto';

@Injectable()
export class CompanyService {
  constructor(
    private readonly companyRepository: CompanyRepository,
    private readonly reputeRepository: ReputeRepository,
  ) {}

  async createCompany(payload: CompanyInfoDto) {
    const createCompanyInfo = await this.companyRepository.createRepute(
      payload,
    );

    return createCompanyInfo;
  }

  async getCompany(corpName: string) {
    const getCompanyInfo = Promise.all([
      this.companyRepository.findOneByCorpName(corpName),
      this.reputeRepository.findOneByCorpName(corpName),
    ]);

    return await getCompanyInfo.then(([company, repute]) => {
      return {
        company: {
          companyId: company.id,
          corpName: company.corpName,
          corpDescription: company.corpDescription,
          corpOperationService: company.corpOperationService,
          corpOperationServiceDescription:
            company.corpOperationServiceDescription,
          corpOperationServiceUrl: company.corpOperationServiceUrl,

          repute: {
            reputeId: repute.id,
            welfarPay: repute.welfarPay,
            workLifeBalance: repute.workLifeBalance,
            companyCulture: repute.companyCulture,
            promotionPotential: repute.promotionPotential,
            teamMember: repute.teamMember,
            average: repute.average,
          },
        },
      };
    });
  }
}
