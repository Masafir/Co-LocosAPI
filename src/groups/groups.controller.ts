import { Patch } from '@nestjs/common';
import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from './dto/create-Group.dto';
import { UpdateGroupDto } from './dto/update-Group.dto';
import { Group } from './group.entity';
import { GroupRepository } from './group.repository';
import { GroupsService } from './groups.service';

@Controller('groups')
export class GroupsController {

    constructor(
    @InjectRepository(GroupRepository)
    private groupRepository: GroupRepository,
    private GroupsService : GroupsService
    ) {}

    @Get()
    getAllGroups() : Promise<Group[]> {
        return this.GroupsService.getAllGroups();
    }

    @Get(':id')
    async getGroupById(@Param('id') id : number) : Promise<Group> {
        return this.GroupsService.getGroupById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createGroup(@Body() createGroupDto : CreateGroupDto) {
    if(createGroupDto)
        {
            return this.GroupsService.createGroup(createGroupDto);
        }
    }

    @UsePipes(ValidationPipe)
    @Patch()
    async updateGroup(@Body() updateGroupDto: UpdateGroupDto){
        if(updateGroupDto){
            return this.GroupsService.updateGroup(updateGroupDto);
        }
    }

}
