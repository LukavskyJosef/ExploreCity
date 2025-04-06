import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './city.entity';
import { Place } from '../places/place.entity';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async findAll(): Promise<City[]> {
    return await this.citiesService.findAll();
  }

  @Get(':id/places')
  async findPlacesByCity(@Param('id') id: number): Promise<Place[]> {
    return await this.citiesService.findPlacesByCity(id);
  }
  
  @Post(':id/places')
async createPlace(
  @Param('id') cityId: number,
  @Body() createPlaceDto: CreatePlaceDto,
): Promise<Place> {
  return await this.citiesService.createPlace(cityId, createPlaceDto);
}

  


}
