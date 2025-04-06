import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Rating } from "./rating.entity";
import { Repository } from "typeorm";
import { RatingDto } from "./ratings.dto";


@Injectable()
export class RatingService {
    constructor(
        @InjectRepository(Rating)
        private ratingRepository: Repository<Rating>
    ) {}

    getRating(placeId: number): Promise<Rating[]> {
        return this.ratingRepository.findBy({
            placeId: placeId
        })
    }

    createRating(data: RatingDto): Promise<Rating> {
        const rating = new Rating();

        rating.placeId = data.placeId;
        rating.rating = data.rating;

        return this.ratingRepository.save(rating);
    }
}