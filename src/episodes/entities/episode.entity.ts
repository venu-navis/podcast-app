import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    constructor( episode: Partial<Episode>)
    {
        Object.assign(this, episode);
    }
}
