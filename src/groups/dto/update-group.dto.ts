import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class UpdateGroupDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    name: string;   

}