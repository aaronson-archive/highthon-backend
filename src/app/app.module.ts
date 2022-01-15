import { Module } from '@nestjs/common';
import { GlobalTypeOrmModule } from '@config/TypeORM';
import { GlobalConfigurationModule } from '@config/Database';
import { GlobalMulterModule } from '@config/Multer';
import { RecogniseModule } from '@src/recognise';
import { CertificateModule } from '@src/verify';
import { ReputeModule } from '@src/repute';
import { CompanyModule } from '@src/company';

@Module({
  imports: [
    GlobalMulterModule,
    GlobalConfigurationModule,
    GlobalTypeOrmModule,
    RecogniseModule,
    CertificateModule,
    ReputeModule,
    CompanyModule,
  ],
})
export class AppModule {}
