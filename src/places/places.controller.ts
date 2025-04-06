import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Place } from "./place.entity";


@Controller('place')
export class PlacesController {
    constructor(
        private readonly placesService: PlacesService
    ) {}

    @Get(':id')
    getPlace(
        @Param('id') placeId: number
    ): Promise<Place[]> {
        return this.placesService.getPlace(placeId);
    }

    @Get(':id/comments')
    getComments(
        @Param('id') placeId: number
    ): Promise<Place> {
        return this.placesService.getComments(placeId);
    }

    @Post(':id/comments')
    createComment(
        @Body() data: CommentDto
    ): Promise<Comment> {
        console.log(data);
        return this.placesService.createComment(data);
    }

    @Get(':id/rating')


    @Post(':id/rating')
}