import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateSpendDto } from './dto/create-spend.dto';
import {v1 as uuid} from 'uuid';
import { UpdateSpendDto } from './dto/update-spend.dto';
import { Spend } from './spend.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SpendRepository } from './spend.repository';

@Injectable()
export class SpendsService {
    private spends: Spend[] = []


    constructor(
        @InjectRepository(SpendRepository)
        private spendRepository: SpendRepository,
    ) {}

    async getAllSpends(): Promise<Spend[]>{
        const spends = await this.spendRepository.find();
        if(!spends){
            throw new NotFoundException("Spends not found")
        }
        return spends;
    }

    @UsePipes(ValidationPipe)
    async getSpendById(id: number): Promise<Spend> {
        const found = await this.spendRepository.findOne(id);
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async createSpend(createSpend: CreateSpendDto): Promise<Spend>{
        const spend = {
            id: uuid(),
            name: createSpend.name,
            status: createSpend.status,
            value: createSpend.value
        }
        const insert = await this.spendRepository.createSpend(spend);
        if(!insert){
            throw new Error("Spend not inserted");
        }
       return insert;
    }

    async updateSpendById(updateSpend: UpdateSpendDto): Promise<Spend> {
        const update : Spend = await this.getSpendById(updateSpend.id)
        update.name = updateSpend.name;
        update.value = updateSpend.value;
        update.status =  updateSpend.status;

        await update.save()
        return update;
    }
}
