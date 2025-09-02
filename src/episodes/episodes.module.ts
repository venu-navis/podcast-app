import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';
import { Episode } from './entities/episode.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Description } from './entities/description.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Episode, Description])],
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
