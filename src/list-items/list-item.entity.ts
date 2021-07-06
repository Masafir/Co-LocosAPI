import { List } from "src/lists/list.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ListItem extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: boolean;

    @Column()
    quantity: number;

    @OneToMany(type => List, list => list.listItem)
    lists: List[]

}