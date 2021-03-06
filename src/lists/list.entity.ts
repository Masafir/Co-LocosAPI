import { ListItem } from "src/list-items/list-item.entity";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class List extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: boolean;

    @ManyToOne(() => ListItem, listitem => listitem.lists)
    listItem: ListItem

}