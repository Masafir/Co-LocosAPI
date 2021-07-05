import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import {v1 as uuid} from 'uuid';


@Entity()
@Unique(["mail"])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: String;

    @Column()
    firstname : String;

    @Column()
    lastname: String;

    /* @Column()
    age: String; */
    
    @Column()
    mail: String;

    @Column({select: false})
    password: String;

    /* @Column({nullable: true})
    image: uuid; */

}