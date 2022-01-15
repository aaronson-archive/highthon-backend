import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { randomUUID } from 'crypto';
import { lastValueFrom } from 'rxjs';
import { OcrExtractData } from './types';

@Injectable()
export class CertificateService {
  constructor(private http: HttpService) {}

  async submitFile(certificateImage: Express.Multer.File) {
    if (certificateImage) {
      const transmitImage = this.http.post(
        process.env.NAVER_OCR_API,
        {
          version: 'V2',
          requestId: randomUUID(),
          timestamp: new Date().getTime(),
          lang: 'ko',
          images: [
            {
              name: certificateImage.originalname,
              data: certificateImage.buffer.toString('base64'),
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
