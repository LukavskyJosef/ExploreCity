import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './city.entity';
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    findAll(): Promise<City[]>;
    findOne(id: number): Promise<City>;
    create(createCityDto: CreateCityDto): Promise<City>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<City>;
    remove(id: number): Promise<void>;
}
