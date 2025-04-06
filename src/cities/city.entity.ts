import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Place } from '../places/place.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Place, place => place.city)
  places: Place[];


}
