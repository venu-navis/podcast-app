import { ApiProperty } from "@nestjs/swagger";
import { Description } from "../entities/description.entity";

export class CreateEpisodeDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    scheduledDate: Date;

    @ApiProperty()
    podcastBy: string;

    @ApiProperty()
    description: Description;
}
