import { BaseElementEntity } from '@src/common';
import { Repute } from '@src/repute/entities';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Company extends BaseElementEntity {
  @Column({ type: 'nvarchar', length: 128 })
  public corpName: string;

  @Column({ type: 'nvarchar', length: 512 })
  public corpDescription: string;

  @Column({ type: 'nvarchar', length: 512 })
  public corpOperationService: string;

  @Column({ type: 'nvarchar', length: 512 })
  public corpOperationServiceDescription: string;

  @Column({ type: 'nvarchar', length: 128 })
  public corpOperationServiceUrl: string;

  @ManyToMany(
    (type) => Repute,
    (repute) => {
      repute.welfarPay,
        repute.workLifeBalance,
        repute.companyCulture,
        repute.promotionPotential,
        repute.teamMember,
        repute.average;
    },
  )
  public repute: Repute;
}
