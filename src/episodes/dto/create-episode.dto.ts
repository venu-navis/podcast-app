import { Description } from "../entities/description.entity";

export class CreateEpisodeDto {
    title: string;
    scheduledDate: Date;
    podcastBy: string;
    description: Description;
}
