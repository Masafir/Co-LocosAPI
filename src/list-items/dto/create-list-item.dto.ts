import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateListItemDto {
    @IsNotEmpty()
    name: string;   
    @Optional()
    @IsNumber()
    @Type(() => Number)
    quantity: number;
    @IsBoolean()
    status: boolean;

}