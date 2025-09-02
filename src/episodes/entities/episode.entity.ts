import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Description } from "./description.entity";

@Entity()
export class Episode {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    podcastBy: string;

    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    uploadDate : Date;

    @Column()
    scheduledDate : Date;

    @Column({default: false})
    watched: boolean;

    @OneToOne(()=>Description, {cascade: true})
    @JoinColumn()
    description: Description;

    constructor( episode: Partial<Episode>)
    {
        Object.assign(this, episode);
    }
}
