import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePartSpendUserDto } from './dto/create-part-spend-user.dto';
import { PartSpendUser } from './part-spend-user.entity';
import { PartSpendUserService } from './part-spends-user.service';

@Controller('part-spends-user')
export class PartSpendUsersController {

    constructor(private partspendusersService : PartSpendUserService) {}

    @Get()
    getAllPartSpendsUser() : Promise<PartSpendUser[]> {
        return this.partspendusersService.getAllPartSpendsUser();
    }

    @Get(':id')
    async getPartSpendUserById(@Param('id') id : number) : Promise<PartSpendUser> {
        return this.partspendusersService.getPartSpendUserById(id);
    }

    @UsePipes(ValidationPipe)
    @Post()
    createPartSpendUser(@Body() createPartSpendUserDto : CreatePartSpendUserDto) {
        if(createPartSpendUserDto)
        {
         return this.partspendusersService.createPartSpendUser(createPartSpendUserDto);
        }
    }

}
