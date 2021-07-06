import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class UpdatePartSpendUserDto {
    @IsNotEmpty()
    id: number
    @IsBoolean()
    value: boolean
    @IsBoolean()
    resolved: boolean;

}