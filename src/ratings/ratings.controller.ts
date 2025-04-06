import { Controller, Get, Param } from "@nestjs/common";
import { RatingService } from "./ratings.service";
import { Rating } from "./rating.entity";


@Controller('rating')
export class RatingController {
    constructor(
        private readonly ratingService: RatingService
    ) {}

    @Get(':id')
    getRating(
        @Param('id') ratingId: number
    ): Promise<Rating> {
        return this.ratingService.getRating(ratingId);
    }
}