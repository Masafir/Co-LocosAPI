import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { List } from './list.entity';
import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {

    constructor(private listsService : ListsService) {}

    @Get()
    getAllLists() : Promise<List[]> {
        return this.listsService.getAllLists();
    }

    @Get(':id')
    async getListById(@Param('id') id : number) : Promise<List> {
        return this.listsService.getListById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createList(@Body() createListDto : CreateListDto) {
        if(createListDto)
        {
         return this.listsService.createList(createListDto);
        }
    }

}
