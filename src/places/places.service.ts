import { Injectable } from "@nestjs/common";
import { Place } from "./place.entity";
import { Repository } from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PlacesService {
    constructor(
        @InjectRepository(Place)
        private placeRepository: Repository<Place>
    ) {}

    getPlace(id: number): Promise<Place> {
        return this.placeRepository.findOneBy({
            id:id
        })
    }
}