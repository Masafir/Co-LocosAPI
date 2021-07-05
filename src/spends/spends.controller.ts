import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SpendsService } from './spends.service';
import { CreateSpendDto } from './dto/create-spend.dto';
import { Spend } from './spend.entity';

@Controller('spends')
export class SpendsController {

    constructor(private spendsService : SpendsService) {}

    @Get()
    getAllSpends() : Promise<Spend[]> {
        return this.spendsService.getAllSpends();
    }

    @Get(':id')
    async getSpendById(@Param('id') id : number) : Promise<Spend>{
        return this.spendsService.getSpendById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    async createSpend(@Body() createSpendDto : CreateSpendDto) : Promise<Spend> {
        return this.spendsService.createSpend(createSpendDto);
    }

    


}
