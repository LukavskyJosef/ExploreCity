import { Module } from "@nestjs/common";
import { City } from "./cities.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import { CityController } from "./cities.controller";
import { CitiesService } from "./cities.service";



@Module( {
    imports: [
        TypeOrmModule.forFeature([City])
    ],
    controllers: [CityController],
    providers: [CitiesService],
})

export class CitiesModule {}