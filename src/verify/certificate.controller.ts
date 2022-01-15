import {
  UploadedFile,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
  constructor(private certificate: CertificateService) {}

  @Post()
  @UseInterceptors(FileInterceptor('certificateImage'))
  async FileUpload(@UploadedFile() certificateImage: Express.Multer.File) {
    return this.certificate.submitFile(certificateImage);
  }
}
