import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { ListItem } from './list-item.entity';
import { ListItemsService } from './list-items.service';

@Controller('lists-items')
export class ListItemsController {

    constructor(private listItemsService : ListItemsService) {}

    @Get()
    getAllLists() : Promise<ListItem[]> {
        return this.listItemsService.getAllLists();
    }

    @Get(':id')
    async getListById(@Param('id') id : number) : Promise<ListItem> {
        return this.listItemsService.getListById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createList(@Body() createListItemDto : CreateListItemDto) {
        if(createListItemDto)
        {
         return this.listItemsService.createList(createListItemDto);
        }
    }

}
