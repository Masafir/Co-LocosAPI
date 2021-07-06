import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class UpdateListItemDto {
    @IsNotEmpty()
    id: number
    @IsNotEmpty()
    name: string;   
    @Optional()
    @IsNumber()
    @Type(() => Number)
    quantity: number;
    @IsBoolean()
    status: boolean;

}