import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PartSpendUser extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    value: boolean;

    @Column()
    resolved: boolean;

}