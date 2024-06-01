import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Series } from './entities/series.entity';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';


@Injectable()
export class SeriesService {
constructor(
  @InjectRepository(Series)
  private seriesRepository: Repository<Series>,
) {}

  async create(createSeriesDto: CreateSeriesDto) :Promise<Series>{
    const existeSeries= await this.seriesRepository.findOneBy({
      titulo:createSeriesDto.titulo,
    }) ;
    if(existeSeries){
      throw new ConflictException('la serie ya existe')
    }
    
    return this.seriesRepository.save({
      titulo:createSeriesDto.titulo.trim(),
      sinopsis: createSeriesDto.sinopsis.trim(),
      director: createSeriesDto.director.trim(),
      temporada:createSeriesDto.temporada,
      fechaEstreno:createSeriesDto.fechaEstreno
    });
  }
  async findAll(): Promise<Series[]> {
    return this.seriesRepository.find();
  }
  async findOne(id: number): Promise<Series> {
    const series=await this.seriesRepository.findOneBy({id});
    if(!series){
      throw new NotFoundException('No existe la serie ${id}');
    }
    return series ;
  }
  async update(id: number, updateSeriesDto: UpdateSeriesDto):Promise<Series> {
    const series=await this.seriesRepository.findOneBy({id});
    const seriesUpdate=Object.assign(series,updateSeriesDto);
    return this.seriesRepository.save(seriesUpdate);
  }

  async remove(id: number) {
    const series=await this.seriesRepository.findOneBy({id});
    return  this.seriesRepository.delete(id);
    
  }
}
