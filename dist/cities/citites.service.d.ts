import { Repository } from 'typeorm';
import { City } from './city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CitiesService {
    private readonly cityRepository;
    constructor(cityRepository: Repository<City>);
    findAll(): Promise<City[]>;
    findOne(id: number): Promise<City>;
    create(createCityDto: CreateCityDto): Promise<City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<City>;
    remove(id: number): Promise<void>;
}
export declare class CreateCityDto {
    readonly name: string;
}
export declare class UpdateCityDto {
    readonly name?: string;
}
