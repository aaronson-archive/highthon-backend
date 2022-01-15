import { Module } from '@nestjs/common';
import { GlobalMulterModule } from '@config/Multer';
import { RecogniseModule } from '@src/recognise';
import { CertificateModule } from '@src/verify';

@Module({
  imports: [GlobalMulterModule, RecogniseModule, CertificateModule],
})
export class AppModule {}
