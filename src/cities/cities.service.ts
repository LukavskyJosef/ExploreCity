import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';
import { Place } from '../places/place.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  getCities(): Promise<City[]> {
    return this.cityRepository.find();
  } 

  async findAll(): Promise<City[]> {
    return await this.cityRepository.find({ order: { name: 'ASC' } });
  }
  async findOne(id: number): Promise<City> {
    return await this.cityRepository.findOne({ where: { id } });
  }

  async findPlacesByCity(id: number): Promise<Place[]> {
    const city = await this.cityRepository.findOne({
      where: { id },
      relations: ['places'], // název relace podle entity
    });
  
    if (!city) {
      throw new NotFoundException('City not found');
    }
  
    return city.places;
  }
  
  async createPlace(cityId: number, createPlaceDto: CreatePlaceDto): Promise<Place> {
    const city = await this.cityRepository.findOne({ where: { id: cityId } });
  
    if (!city) {
      throw new NotFoundException('City not found');
    }
  
    const place = this.placeRepository.create({
      ...createPlaceDto,
      city: city,
    });
  
    return await this.placeRepository.save(place);
  }
  



 


}
