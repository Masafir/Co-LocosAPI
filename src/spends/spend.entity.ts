import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Spend extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    // @OneToMany(type => Photo, photo => photo.user)
    // photos: Photo[];
    
    @Column()
    name: string;

    @Column()
    status: boolean;

    @Column()
    value: string;

}