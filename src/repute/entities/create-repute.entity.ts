import { BaseElementEntity } from '@src/common';
import { Column, Entity } from 'typeorm';

@Entity()
export class Repute extends BaseElementEntity {
  @Column({ type: 'nvarchar', length: 128 })
  public corpName: string;

  @Column({ type: 'int', default: 0 })
  public welfarPay: number;

  @Column({ type: 'int', default: 0 })
  public workLifeBalance: number;

  @Column({ type: 'int', default: 0 })
  public companyCulture: number;

  @Column({ type: 'int', default: 0 })
  public promotionPotential: number;

  @Column({ type: 'int', default: 0 })
  public teamMember: number;

  @Column({ type: 'double', default: 0.0 })
  public average?: number | undefined;
}
