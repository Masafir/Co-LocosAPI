
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateGroupDto {
    @IsNotEmpty()
    name: string;   

}