import { Group } from "src/groups/group.entity";
import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    status: string;

    @ManyToOne(() => Group, group => group.tasks)
    group: Group

    @ManyToMany(() => User)
    @JoinTable()
    users: User[]
}