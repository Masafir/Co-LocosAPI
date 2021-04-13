import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coloc {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

}