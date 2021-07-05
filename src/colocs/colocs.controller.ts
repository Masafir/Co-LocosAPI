import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ColocsService } from './colocs.service';
import { Coloc } from './colocs.model' ;
import { CreateColocDto } from './dto/create-coloc.dto';

@Controller('colocs')
export class ColocsController {

    constructor(private colocsService : ColocsService) {}

    @Get()
    getAllColocs() : Coloc[] {
        return this.colocsService.getAllColocs();
    }

    @Get(':id')
    getColocById(@Param('id') id :string) : Coloc {
        return this.colocsService.getColocById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createColoc(@Body() createColocDto : CreateColocDto) : Coloc {
        return this.colocsService.createColoc(createColocDto);
    }

    


}
