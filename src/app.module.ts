import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) =>(
          {
            type: 'postgres',
            host: configService.get('DB_HOST'),
            password: configService.get('DB_PASSWORD'),
            port: +configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            database: configService.get('DB_DATABASE'),
            autoLoadEntities: true,
            synchronize: configService.get<boolean>('SYNCHRONIZATION')
          }
        )
    }),
    EpisodesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
