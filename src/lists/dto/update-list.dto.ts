import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class UpdateListDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;   
    @Optional()
    @IsBoolean()
    status: boolean;

}