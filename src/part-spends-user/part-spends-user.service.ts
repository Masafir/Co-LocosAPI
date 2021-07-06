import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePartSpendUserDto } from './dto/create-part-spend-user.dto';
import {v1 as uuid} from 'uuid';
import { UpdatePartSpendUserDto } from './dto/update-part-spend-user.dto';
import { PartSpendUser } from './part-spend-user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PartSpendUserRepository } from './part-spend.user.repository';

@Injectable()
export class PartSpendUserService {
    private partspendusers: PartSpendUser[] = []


    constructor(
        @InjectRepository(PartSpendUserRepository)
        private partspenduserRepository: PartSpendUserRepository,
    ) {}

    async getAllPartSpendsUser(): Promise<PartSpendUser[]>{
        const partspendusers = await this.partspenduserRepository.find();
        if(!partspendusers){
            throw new NotFoundException("PartSpendUsers not found")
        }
        return partspendusers;
    }

    @UsePipes(ValidationPipe)
    async getPartSpendUserById(id: number): Promise<PartSpendUser> {
        const found = await this.partspenduserRepository.findOne(id);
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async createPartSpendUser(createPartSpendUser: CreatePartSpendUserDto): Promise<PartSpendUser>{
        const partspenduser = {
            value: createPartSpendUser.value,
            resolved: createPartSpendUser.resolved
        }
        const insert = await this.partspenduserRepository.createPartSpendUser(partspenduser);
        if(!insert){
            throw new Error("PartSpendUser not inserted");
        }
       return insert;
    }

    async updatePartSpendUserById(updatePartSpendUser: UpdatePartSpendUserDto): Promise<PartSpendUser> {
        const update : PartSpendUser = await this.getPartSpendUserById(updatePartSpendUser.id)
        update.value = updatePartSpendUser.value;
        update.resolved = updatePartSpendUser.resolved;

        await update.save()
        return update;
    }
}
