import { Controller, Get, Param } from "@nestjs/common";
import { CommentsService } from "./comments.service";


@Controller('place/:id/comments')
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService
    ) {}

    @Get(':id')
    getComments(
        @Param('id') id:number
    ) {
        return this.commentsService.getComments(id);
    }
}