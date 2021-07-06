import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import {v1 as uuid} from 'uuid';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ListRepository } from './list.repository';

@Injectable()
export class ListsService {
    private lists: List[] = []


    constructor(
        @InjectRepository(ListRepository)
        private listRepository: ListRepository,
    ) {}

    async getAllLists(): Promise<List[]>{
        const lists = await this.listRepository.find();
        if(!lists){
            throw new NotFoundException("Lists not found")
        }
        return lists;
    }

    @UsePipes(ValidationPipe)
    async getListById(id: number): Promise<List> {
        const found = await this.listRepository.findOne(id);
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async createList(createList: CreateListDto): Promise<List>{
        const list = {
            id: uuid(),
            name: createList.name,
            status: createList.status,
        }
        const insert = await this.listRepository.createList(list);
        if(!insert){
            throw new Error("List not inserted");
        }
       return insert;
    }

    async updateListById(updateList: UpdateListDto): Promise<List> {
        const update : List = await this.getListById(updateList.id)
        update.name = updateList.name;
        update.status =  updateList.status;

        await update.save()
        return update;
    }
}
