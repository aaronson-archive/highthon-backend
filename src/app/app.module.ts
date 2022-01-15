import { Module } from '@nestjs/common';
import { GlobalMulterModule } from '@config/Multer';
import { RecogniseModule } from '@src/recognise';

@Module({
  imports: [GlobalMulterModule, RecogniseModule],
})
export class AppModule {}
