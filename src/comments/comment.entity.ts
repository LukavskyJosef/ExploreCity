import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placeId: number;

    @Column()
    text: Text;

    constructor(placeId: number = 0) {
        this.placeId = placeId;
    }
}