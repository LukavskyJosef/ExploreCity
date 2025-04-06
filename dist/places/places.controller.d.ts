import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './place.entity';
export declare class PlacesController {
    private readonly placesService;
    constructor(placesService: PlacesService);
    findOne(id: number): Promise<Place>;
    create(createPlaceDto: CreatePlaceDto): Promise<Place>;
    update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place>;
    remove(id: number): Promise<void>;
}
