import { List } from "src/lists/list.entity";
import { Task } from "src/tasks/task.entity";
import { User } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Group extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Task, task => task.group)
    tasks: Task[]

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];

    @ManyToMany(() => List)
    @JoinTable()
    lists: List[]

}