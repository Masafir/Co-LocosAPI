import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { Coloc } from './colocs.model';
import {v1 as uuid} from 'uuid';
import { CreateColocDto } from './dto/create-coloc.dto';
import { UpdateColocDto } from './dto/update-coloc.dto';



@Injectable()
export class ColocsService {
    private colocs: Coloc[] = []

    getAllColocs(): Coloc[]{
        return this.colocs;
    }

    @UsePipes(ValidationPipe)
    getColocById(id: string): Coloc {
        const coloc : Coloc = this.colocs.find((coloc) => coloc.id === id);
        if (!coloc){
            throw new NotFoundException();
        }
        return coloc;
    }

    createColoc(createColoc: CreateColocDto): Coloc{
        const coloc: Coloc = {
            id: uuid(),
            name: createColoc.name
        };
        this.colocs.push(coloc);
        return coloc;
    }

    updateColocById(updateColoc: UpdateColocDto): Coloc {
        const coloc : Coloc = this.getColocById(updateColoc.id)
        if(!coloc){
            throw new NotFoundException();
        }
        coloc.name = updateColoc.name;
        return coloc;
    }



}
