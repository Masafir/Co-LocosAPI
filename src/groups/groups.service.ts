import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-Group.dto';
import {v1 as uuid} from 'uuid';
import { UpdateGroupDto } from './dto/update-Group.dto';
import { Group } from './Group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupRepository } from './Group.repository';

@Injectable()
export class GroupsService {

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
        const group = await this.GroupRepository.createGroup(createGroup);
        if(!group){
            throw new Error("Group not inserted");
        }
       return group;
    }

    async updateGroup(updateGroup: UpdateGroupDto): Promise<Group> {
        const group : Group = await this.GroupRepository.updateGroup(updateGroup);
        return group;
    }

}
