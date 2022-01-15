import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';

import multerConfigurationLoader from './multer-configuration.loader';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [multerConfigurationLoader],
    }),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        dest: configService.get('multer.multerPath'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class GlobalMulterModule {}
