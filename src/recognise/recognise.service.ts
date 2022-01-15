import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { randomUUID } from 'crypto';
import { lastValueFrom } from 'rxjs';
import { OcrExtractData } from './types';

@Injectable()
export class RecogniseService {
  constructor(private http: HttpService) {}

  async submitFile(recogniseImage: Express.Multer.File) {
    if (recogniseImage) {
      const transmitImage = this.http.post(
        process.env.NAVER_OCR_API,
        {
          version: 'V2',
          requestId: randomUUID(),
          timestamp: new Date().getTime(),
          lang: 'ko',
          images: [
            {
              name: recogniseImage.originalname,
              data: recogniseImage.buffer.toString('base64'),
              format: 'jpeg',
            },
          ],
        },
        {
          headers: {
            'X-OCR-SECRET': process.env.NAVER_OCR_KEY,
            'Content-Type': 'application/json',
          },
        },
      );

      return lastValueFrom(transmitImage).then((res) => {
        return res.data.images.map((docs: OcrExtractData) => {
          return docs;
        });
      });
    } else {
      throw Error('No file');
    }
  }
}
