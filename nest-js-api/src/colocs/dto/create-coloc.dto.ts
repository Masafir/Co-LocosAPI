import { Optional } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator'

export class CreateColocDto {
    @IsNotEmpty()
    name: string;
}