import { Spend } from "src/spends/spend.entity";
import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartSpendUser extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    value: boolean;

    @Column()
    resolved: boolean;

    @OneToMany(type => Spend, spend => spend.partSpendUser)
    spends: Spend[]

    @OneToMany(type => User, user => user.partSpendUser)
    users: User[]

}