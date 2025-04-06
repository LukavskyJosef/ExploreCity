import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placeId: number;

    @Column()
    rating:number;
}