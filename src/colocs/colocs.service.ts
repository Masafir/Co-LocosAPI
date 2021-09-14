import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { Coloc } from './colocs.model';
import {v1 as uuid} from 'uuid';
import { CreateColocDto } from './dto/create-coloc.dto';
import { UpdateColocDto } from './dto/update-coloc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ColocRepository } from './coloc.repository';



@Injectable()
export class ColocsService {

    constructor(
        @InjectRepository(ColocRepository)
        private colocRepository: ColocRepository,
    ) {}

    async getAllColocs(): Promise<Coloc[]>{
        return this.colocRepository.find();
    }

    @UsePipes(ValidationPipe)
    async getColocById(id: string): Promise<Coloc> {
        const coloc : Coloc = await this.colocRepository.findOne(id);
        if (!coloc){
            throw new NotFoundException();
        }
        return coloc;
    }

    async createColoc(createColoc: CreateColocDto): Promise<Coloc>{
        const coloc: Coloc = await this.colocRepository.createColoc(createColoc);
        return coloc;
    }

    async updateColocById(updateColoc: UpdateColocDto): Promise<Coloc> {
        const coloc : Coloc = await this.colocRepository.updateColoc(updateColoc);
        return coloc;
    }



}
