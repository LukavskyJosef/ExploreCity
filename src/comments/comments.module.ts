import { Module } from "@nestjs/common";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module( {
    imports: [
        TypeOrmModule.forFeature([Comment])
    ],
    controllers: [CommentsController],
    providers: [CommentsService]
})

export class CommentsModule {}