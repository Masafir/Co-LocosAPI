import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-Group.dto';
import {v1 as uuid} from 'uuid';
import { UpdateGroupDto } from './dto/update-Group.dto';
import { Group } from './Group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupRepository } from './Group.repository';

@Injectable()
export class GroupsService {
    private Groups: Group[] = []


    constructor(
        @InjectRepository(GroupRepository)
        private GroupRepository: GroupRepository,
    ) {}

    async getAllGroups(): Promise<Group[]>{
        const Groups = await this.GroupRepository.find();
        if(!Groups){
            throw new NotFoundException("Groups not found")
        }
        return Groups;
    }

    @UsePipes(ValidationPipe)
    async getGroupById(id: number): Promise<Group> {
        const found = await this.GroupRepository.findOne(id);
        if (!found) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }

    async createGroup(createGroup: CreateGroupDto): Promise<Group>{
        const Group = {
            name: createGroup.name
        }
        const insert = await this.GroupRepository.createGroup(Group);
        if(!insert){
            throw new Error("Group not inserted");
        }
       return insert;
    }

    async updateGroupById(updateGroup: UpdateGroupDto): Promise<Group> {
        const update : Group = await this.getGroupById(updateGroup.id)
        update.name = updateGroup.name;

        await update.save()
        return update;
    }
}
