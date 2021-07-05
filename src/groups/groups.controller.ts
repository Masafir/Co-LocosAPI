import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-Group.dto';
import { Group } from './Group.entity';
import { GroupsService } from './Groups.service';

@Controller('groups')
export class GroupsController {

    constructor(private GroupsService : GroupsService) {}

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

}
