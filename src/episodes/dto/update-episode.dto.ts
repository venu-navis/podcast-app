import { ApiProperty } from "@nestjs/swagger";
import { Description } from "../entities/description.entity";

export class UpdateEpisodeDto{
    @ApiProperty()
    title?: string;

    @ApiProperty()
    scheduledDate?: Date;

    @ApiProperty()
    podcastBy?: string;

    @ApiProperty()
    description?: Description
}
