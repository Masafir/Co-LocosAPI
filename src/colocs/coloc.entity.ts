import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coloc extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

}