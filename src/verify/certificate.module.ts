import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CertificateController } from './certificate.controller';
import { CertificateService } from './certificate.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CertificateController],
  providers: [CertificateService],
  exports: [],
})
export class CertificateModule {}
