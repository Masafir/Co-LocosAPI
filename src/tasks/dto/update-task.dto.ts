import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class UpdateTaskDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    @IsString()
    name: string
    @IsBoolean()
    status: boolean
}