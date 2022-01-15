import { Module } from '@nestjs/common';
import { GlobalTypeOrmModule } from '@config/TypeORM';
import { GlobalConfigurationModule } from '@config/Database';
import { GlobalMulterModule } from '@config/Multer';
import { RecogniseModule } from '@src/recognise';
import { CertificateModule } from '@src/verify';
import { ReputeModule } from '@src/repute';

@Module({
  imports: [
    GlobalMulterModule,
    GlobalConfigurationModule,
    GlobalTypeOrmModule,
    RecogniseModule,
    CertificateModule,
    ReputeModule,
  ],
})
export class AppModule {}
