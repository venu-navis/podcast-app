import { Injectable } from '@nestjs/common';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { EntityManager, Repository } from 'typeorm';
import { Episode } from './entities/episode.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EpisodesService {
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(Episode)
    private readonly episodesRepository: Repository<Episode>
  ){}

  async create(createEpisodeDto: CreateEpisodeDto) {
    const episode = new Episode(createEpisodeDto);
    
    await this.entityManager.save(episode);
  }

  async findAll() {
    return this.episodesRepository.find();
  }

  async findOne(id: number) {
    return this.episodesRepository.findOneBy({id});
  }

  async update(id: number, updateEpisodeDto: UpdateEpisodeDto) {
    await this.episodesRepository.update({id}, updateEpisodeDto);
  }

  async remove(id: number) {
    await this.episodesRepository.delete({id});
  }
}
