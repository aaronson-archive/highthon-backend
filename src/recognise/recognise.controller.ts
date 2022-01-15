import {
  UploadedFile,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RecogniseService } from './recognise.service';

@Controller('recognise')
export class RecogniseController {
  constructor(private recognise: RecogniseService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async FileUpload(@UploadedFile() recogniseImage: Express.Multer.File) {
    return this.recognise.submitFile(recogniseImage);
  }
}
