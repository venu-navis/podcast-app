import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Description{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brief: string;

    @Column()
    duration: string;

    constructor(description: Partial<Description>)
    {
        Object.assign(this, description);
    }
}