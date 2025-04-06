import { City } from "../cities/city.entity";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Place {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    address: string

    @Column()
    cityId: number

    @ManyToOne(
        type => City,
        c => c.places
    )
    city: City

    constructor(name: string = "", type: string = "", address: string = "") {
        this.name = name;
        this.type = type;
        this.address = address;
    }
}