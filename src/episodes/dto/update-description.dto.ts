import { ApiProperty } from "@nestjs/swagger";

export class CreateDescriptionDto{

    @ApiProperty()
    brief?: string;

    @ApiProperty()
    duration?: string;
}