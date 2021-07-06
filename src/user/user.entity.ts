import { PartSpendUser } from "src/part-spends-user/part-spend-user.entity";
import { Spend } from "src/spends/spend.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
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

    @OneToOne(()=> Spend)
    @JoinColumn()
    spend: Spend;

    @ManyToOne(() => PartSpendUser, partSpendUser => partSpendUser.users)
    partSpendUser: PartSpendUser

    /* @Column({nullable: true})
    image: uuid; */

}