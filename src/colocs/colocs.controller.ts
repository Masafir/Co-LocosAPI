import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ColocsService } from './colocs.service';
import { Coloc } from './colocs.model' ;
import { CreateColocDto } from './dto/create-coloc.dto';

@Controller('colocs')
export class ColocsController {

    constructor(private colocsService : ColocsService) {}

    @Get()
    async getAllColocs() : Promise<Coloc[]> {
        return this.colocsService.getAllColocs();
    }

    @Get(':id')
    async getColocById(@Param('id') id :string) : Promise<Coloc> {
        return this.colocsService.getColocById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createColoc(@Body() createColocDto : CreateColocDto) : Promise<Coloc> {
        return this.colocsService.createColoc(createColocDto);
    }

    


}
