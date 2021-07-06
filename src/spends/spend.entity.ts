import { PartSpendUser } from "src/part-spends-user/part-spend-user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Spend extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: boolean;

    @Column()
    value: string;

    @ManyToOne(() => PartSpendUser, partSpendUser => partSpendUser.spends)
    partSpendUser: PartSpendUser

}