import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateListDto {
    @IsNotEmpty()
    name: string;   
    @Optional()
    @IsBoolean()
    status: boolean;

}