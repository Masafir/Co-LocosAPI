import { IsNotEmpty, IsString } from "class-validator"

export class UpdateColocDto {
    @IsNotEmpty()
    id: string
    @IsNotEmpty()
    @IsString()
    name: string
}