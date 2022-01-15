import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RecogniseController } from './recognise.controller';
import { RecogniseService } from './recognise.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5,
    }),
  ],
  controllers: [RecogniseController],
  providers: [RecogniseService],
  exports: [],
})
export class RecogniseModule {}
