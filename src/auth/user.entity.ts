import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {v1 as uuid} from 'uuid';


@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    name: string;

    @Column()
    firstname : string;

    @Column()
    lastname: string;

    @Column()
    age: string;
    
    @Column()
    mail: string;

    @Column()
    password: string;

    @Column()
    image: uuid;

}