import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity";
import { CommentDto } from "./comments.dto";


@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>
    ) {}

    getComments(placeId: number): Promise<Comment[]> {
        return this.commentRepository.findBy({
            placeId: placeId
        })
    }

    createComment(data: CommentDto): Promise<Comment> {
        const comment = new Comment();
        
        comment.placeId = data.placeId;
        comment.text = data.text;

        return this.commentRepository.save(comment);
    }
}