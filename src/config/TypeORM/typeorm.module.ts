import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './import-entities';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get('typeorm.host'),
        port: configService.get('typeorm.port'),
        database: configService.get('typeorm.database'),
        username: configService.get('typeorm.username'),
        password: configService.get('typeorm.password'),
        synchronize: configService.get('typeorm.synchronize'),
        logging: configService.get('typeorm.logging'),
        entities: [...entities],
        autoLoadEntities: true,
        bigNumberStrings: false,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class GlobalTypeOrmModule {}
