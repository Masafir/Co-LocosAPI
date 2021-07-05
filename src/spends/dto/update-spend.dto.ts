import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class UpdateSpendDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;   
    @Optional()
    @IsString()
    value: string;
    @IsBoolean()
    status: boolean;

}