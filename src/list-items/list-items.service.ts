import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateListItemDto } from './dto/create-list-item.dto';
import {v1 as uuid} from 'uuid';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { ListItem } from './list-item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ListItemRepository } from './list-item.repository';

@Injectable()
export class ListItemsService {
    private listItems: ListItem[] = []


    constructor(
        @InjectRepository(ListItemRepository)
        private listItemRepository: ListItemRepository,
    ) {}

    async getAllLists(): Promise<ListItem[]>{
        const lists = await this.listItemRepository.find();
        if(!lists){
            throw new NotFoundException("Lists not found")
        }
        return lists;
    }

    @UsePipes(ValidationPipe)
    async getListById(id: number): Promise<ListItem> {
        const found = await this.listItemRepository.findOne(id);
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async createList(createListItem: CreateListItemDto): Promise<ListItem>{
        const listItem = {
            name: createListItem.name,
            status: createListItem.status,
            quantity: createListItem.quantity
        }
        const insert = await this.listItemRepository.createListItem(listItem);
        if(!insert){
            throw new Error("List not inserted");
        }
       return insert;
    }

    async updateListById(updateListItem: UpdateListItemDto): Promise<ListItem> {
        const update : ListItem = await this.getListById(updateListItem.id)
        update.name = updateListItem.name;
        update.status =  updateListItem.status;

        await update.save()
        return update;
    }
}
